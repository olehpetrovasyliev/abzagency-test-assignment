# Test Assignment README

## Introduction

This test assignment involves creating a form to add a user with specific validation requirements. The form includes fields for the user's name, email, phone, position ID, and a photo. This README provides an overview of the form, the validation rules, and how to use the code.

## Form Fields

The `AddUserForm` includes the following fields:

- **name**: The name of the user.
- **email**: The email address of the user.
- **phone**: The phone number of the user.
- **position_id**: The ID of the user's position.
- **photo**: A photo of the user.

## Validation Rules

Each field in the `AddUserForm` has specific validation rules:

- **name**: Must be between 2 and 60 characters.
- **email**: Must be a valid email address according to RFC2822.
- **phone**: Must start with the country code of Ukraine, +380.
- **position_id**: Must be a valid user position ID.
- **photo**: Must be a JPG or JPEG image, at least 70x70 pixels, and no larger than 5MB.

## Usage

1. Clone the repository to your local machine.
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory.
   ```bash
   cd <project-directory>
   ```
3. Open the project in your preferred IDE or code editor.
4. Ensure all dependencies are installed (if applicable).
5. Run the application.

## Example

Below is an example of how to instantiate and use the `AddUserForm`:

```python
from form_module import AddUserForm

form_data = {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+380123456789",
    "position_id": 1,
    "photo": "path/to/photo.jpg"
}

form = AddUserForm(**form_data)

if form.validate():
    print("Form is valid")
else:
    print("Form is invalid")
    print(form.errors)
```
