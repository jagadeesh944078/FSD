### Vulnerability

- user session hijacking
- unauthorized activities
- capturing keystrokes
- stealing critical information
- phishing attack

- first we should convert url using encodeURIComponent method and pass as query params because there can be special characters if you pass it asitis as queryparam the browser will automatically use it treat it in terms of encoded one that could creates the problem

### Mitigation

- List all possible way to take user input
- Replace: innerHTML > innerText or use textContent
- example:
-     document.getElementById("username").textContent = sanitizedName;
-     OR
-     document.getElementById("username").innerText = sanitizedName;
- **Escaping**
- example
-     const sanitizedName = name.replace(/</g, '&lt;'>).replace(/>/g, '&gt;');
- **Using Library like React**
- **Sanitize data: DOMPurify**
- **CSP(Content Security Policy) Headers**
  - 1.Allowed Sources
  - 2.Script Nonces
  - 3.Report-only mode
- **Avoid using eval**
