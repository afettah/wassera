Todo

- hedrataion error
- I18N
- chat boot
- add animation
- add backgrounds
- make design butiful
- add other pages
- Font

Getting started Spec :

Modal Trigger
Element: Click "Get Started"
Action: When the button is clicked, it opens a modal.
Modal Content
Header
Title: "Services"
Description:
kotlin
Copy code
Please follow this form. Our sales team will reach out to you soon to find out how we can help.
Form
The form will include the following fields:

Full Name (Text input)

Location (City) (Select dropdown for cities)

Options should include a list of major cities like Riyadh, Jeddah, etc.
Phone Number (Text input, format validation for the Saudi region)

Email (Text input, email validation)

Desired Service (Select dropdown for services)

Options:
Mortgage Split: Tailored financing solution with different terms.
Investments: Opportunities for financial growth.
Asset-Backed Loan: Funding based on collateral.
Savings: Flexible savings solutions.
Descriptions of each option could be presented as tooltips or descriptions under the dropdown.
Details (Textarea): A larger input for users to provide more specific details regarding their inquiry or requirements.

Buttons
Submit Button: Once the form is filled, clicking this button submits the information.
Text on button: "Submit"
Submit Action: After submission, the following message should be displayed in place of the form:
rust
Copy code
Thank you for your interest in Waseera. We will contact you very soon.
