function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">
          © {new Date().getFullYear()} Intel. All rights reserved.
        </p>
        <p className="mb-0">Made with ❤️ by the Intel Team</p>
      </div>
    </footer>
  );
}
export default Footer;
