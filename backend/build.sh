#!/usr/bin/env bash
# exit on error
set -o errexit

# Install dependencies
pip install -r requirements.txt

# Collect static files
python manage.py collectstatic --no-input

# Run migrations
python manage.py migrate

# Seed questions (if not already seeded)
python manage.py shell -c "from seed_questions import questions; from quiz.models import Question; [Question.objects.get_or_create(**q) for q in questions]; print('Successfully seeded questions!')"
