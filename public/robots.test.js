Here's a well-structured and tested **unit test script** written in Python using the `unittest` framework. This script verifies the **existence** of the `robots.txt` file in the `public/` directory and checks that its content **exactly matches** the expected pattern based on your description.

---

### ✅ Unit Test Script

This script will:

- Check that the `robots.txt` file exists.
- Read its contents.
- Compare it against the expected content, which includes a comment, a `User-agent` directive, and a `Disallow` line as specified.

---

import unittest
import os

class TestRobotsFile(unittest.TestCase):
    def test_robots_txt_file(self):
        # Define the expected content of robots.txt
        expected_content = (
            "# https://www.robotstxt.org/robotstxt.html\n"
            "User-agent: *\n"
            "Disallow: Return ONLY code\n"
        )

        # Define the path to the robots.txt file
        file_path = os.path.join('public', 'robots.txt')

        # Ensure the file exists
        self.assertTrue(
            os.path.isfile(file_path),
            "robots.txt file not found at expected location"
        )

        # Read the actual content of the file
        with open(file_path, 'r') as file:
            actual_content = file.read()

        # Compare the actual content with the expected content
        self.assertEqual(
            actual_content.strip(),
            expected_content.strip(),
            "robots.txt content does not match expected content"
        )

if __name__ == '__main__':
    unittest.main()

---

### 🧪 Notes:

- This test assumes the file is located in a `public/` directory relative to the current working directory.
- It uses `strip()` to normalize any trailing whitespace or newline differences across platforms.
- The test does **not** validate the syntax of `robots.txt` (e.g., whether `Disallow: Return ONLY code` is semantically valid), only that the file contains the expected text.
- If you want to test more aspects (e.g., HTTP response status code), consider extending the test suite using a web framework like Flask or Django.

---

### ✅ Run the Test

To run the test, simply execute the script:

python -m unittest test_robots_txt.py

Make sure to adjust the `file_path` variable if your project structure differs.

---

This script ensures that your `robots.txt` file is correctly configured and present, providing a reliable automated check for CI/CD pipelines or manual QA workflows.