# Playwright QA Automation Assignment

Hi, this is my submission for the QA Automation Engineer assignment.
I have completed both UI and API automation using Playwright with JavaScript.

### UI Automation

* Opened the DemoQA website and navigated to the Book Store section
* Logged in using a manually created user
* Verified that login was successful (username and logout button visible)
* Searched for the book: *Learning JavaScript Design Patterns*
* Validated that the book appears in search results
* Extracted Title, Author, and Publisher
* Saved the details into a file (`bookDetails.txt`)
* Logged out successfully


### API Automation (Reqres)

* Created a user using POST API and validated status code (201)
* Stored the returned user ID
* Tried fetching the user using GET API
* Updated the user details using PUT API and validated the response

---
## Note

Reqres is a mock API, so the created user is not actually stored in backend.
Because of this, GET API may sometimes return 404, which is expected.

Also, API key (`x-api-key`) is used for authentication.

---

## How to run the project

Install dependencies:
npm install

Run tests:

npx playwright test

Open test report:

npx playwright show-report


## Project Structure

* `e2e/` → contains UI and API test files
* `bookDetails.txt` → output file from UI test

