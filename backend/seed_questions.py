from quiz.models import Question

questions = [
    {
        "question": "Which of these is the capital of India?",
        "option_a": "Mumbai",
        "option_b": "New Delhi",
        "option_c": "Kolkata",
        "option_d": "Chennai",
        "correct_answer": "B"
    },
    {
        "question": "Who is known as the 'Iron Man of India'?",
        "option_a": "Bhagat Singh",
        "option_b": "Jawaharlal Nehru",
        "option_c": "Sardar Vallabhbhai Patel",
        "option_d": "Subhas Chandra Bose",
        "correct_answer": "C"
    },
    {
        "question": "What is the national animal of India?",
        "option_a": "Lion",
        "option_b": "Elephant",
        "option_c": "Tiger",
        "option_d": "Leopard",
        "correct_answer": "C"
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "option_a": "Venus",
        "option_b": "Mars",
        "option_c": "Jupiter",
        "option_d": "Saturn",
        "correct_answer": "B"
    },
    {
        "question": "Who wrote the national anthem of India?",
        "option_a": "Rabindranath Tagore",
        "option_b": "Bankim Chandra Chattopadhyay",
        "option_c": "Muhammad Iqbal",
        "option_d": "Sarojini Naidu",
        "correct_answer": "A"
    },
    {
        "question": "What is the largest ocean on Earth?",
        "option_a": "Atlantic Ocean",
        "option_b": "Indian Ocean",
        "option_c": "Arctic Ocean",
        "option_d": "Pacific Ocean",
        "correct_answer": "D"
    },
    {
        "question": "Which is the longest river in the world?",
        "option_a": "Amazon",
        "option_b": "Nile",
        "option_c": "Ganga",
        "option_d": "Yangtze",
        "correct_answer": "B"
    },
    {
        "question": "Who painted the Mona Lisa?",
        "option_a": "Vincent van Gogh",
        "option_b": "Pablo Picasso",
        "option_c": "Leonardo da Vinci",
        "option_d": "Claude Monet",
        "correct_answer": "C"
    },
    {
        "question": "What is the chemical symbol for Gold?",
        "option_a": "Ag",
        "option_b": "Au",
        "option_c": "Pb",
        "option_d": "Fe",
        "correct_answer": "B"
    },
    {
        "question": "Which gas do plants absorb from the atmosphere?",
        "option_a": "Oxygen",
        "option_b": "Carbon Dioxide",
        "option_c": "Nitrogen",
        "option_d": "Hydrogen",
        "correct_answer": "B"
    }
]

for q in questions:
    Question.objects.get_or_create(**q)

print("Successfully seeded questions!")
