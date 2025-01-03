<!DOCTYPE html>
<html lang="en">
<head>
    // ...existing code...
    <meta name="user-logged-in" content="{{ Auth::check() ? 'true' : 'false' }}">
    // ...existing code...
</head>
<body>
    // ...existing code...
</body>
</html>
