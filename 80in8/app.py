from flask import Flask, jsonify, request, render_template
from questions_gen import generate_questions  # Import the function

app = Flask(__name__)

# Use generate_questions to get the list of questions
questions = {f"question {i+1}": q for i, q in enumerate(generate_questions())}

@app.route('/')
def index():
    return render_template('test.html')  # HTML file for the test

@app.route('/get_question/<int:question_id>', methods=['GET'])
def get_question(question_id):
    return jsonify(questions.get(f"question {question_id}", {}))

@app.route('/get_total_num_of_questions', methods=['GET']) 
def get_total_questions():
    return jsonify({"total": len(questions)})


@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    answers = data.get('answers', {})
    correct = sum(1 for q, a in answers.items() if questions[q]['answer'] == a)
    incorrect = len(answers) - correct
    return jsonify({"correct": correct, "incorrect": incorrect})

if __name__ == '__main__':
    app.run(debug=True)
 