# backend/app.py
import sys
import os

# Go up 3 directories from current file, Then enter into your target folder, e.g., 'LLM/streamlit_helper.py'
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../../LLM")))

from flask import Flask, request, jsonify
from streamlit_helper import StreamlitHelper
from datetime import datetime
import time

app = Flask(__name__)
helper = StreamlitHelper()

# CORS if frontend is on a different port
from flask_cors import CORS
CORS(app)

def make_json_safe(obj):
    if isinstance(obj, set):
        return [make_json_safe(item) for item in obj]  # convert sets to lists
    if isinstance(obj, tuple):
        return [make_json_safe(item) for item in obj]  # convert tuples to lists
    if isinstance(obj, datetime):
        return obj.isoformat()
    if isinstance(obj, dict):
        return {k: make_json_safe(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [make_json_safe(i) for i in obj]
    return obj


@app.route("/api/search", methods=["POST"])
def search():
    data = request.get_json()
    query = data.get("query")
    llm_model = data.get("llmModel")
    source = data.get("source")

    print("=== Search Request Received ===")
    print(f"Query       : {query}")
    print(f"LLM Model   : {llm_model}")
    print(f"Data Source : {source}")
    print("===============================")
    
    try:
        start_time = time.time()  # seconds (float)
        result = helper.ask_question_web(query, llm_model, source, is_log = False)
        end_time = time.time()

        processing_time_ms = int((end_time - start_time) * 1000)  # convert to ms
        print(f"[INFO] Query processed in {processing_time_ms} ms")
        
        # Convert datetime objects to string if necessary
        if "timestamp" in result:
            result["timestamp"] = str(result["timestamp"])

        result["processingTime"] = str(processing_time_ms)
        
        safe_result = make_json_safe(result)

        print("[SUCCESS] Result ready to return:")
        print(safe_result)
        
        return jsonify(safe_result)
    except Exception as e:
        print(f"[ERROR] Exception occurred: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)
