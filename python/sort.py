import json
import os

def fetch_file():
    """
    Reads and parses JSON data from ../DB/data.json file
    Returns parsed data or None if error occurs
    """
    try:
        with open('../DB/data.json', 'r', encoding='utf-8') as file:
            json_string = file.read()
            data = json.loads(json_string)
            return data
    except Exception as err:
        print(f"❎ Error: {err}")
        return None

# Execute the function
run = fetch_file()
# print(run)

# Map the json data
if run:
    sex_data = [item['sex'] for item in run]
    # print(sex_data)

    # Transform user data
    user_data = []
    for item in run:
        user_info = {
            "id": item['id'],
            "Name": item['name'],
            "Sex": "let's go to denver" if item['sex'] == "Female" else "go way for me"
        }
        user_data.append(user_info)

    # print(user_data)

    # Sort the json data
    # Sort by number (commented out as in original)
    # sort_data = sorted(run, key=lambda x: x['id'])

    # Sort by name
    sort_data = sorted(run, key=lambda x: x['name'])
    print(sort_data)