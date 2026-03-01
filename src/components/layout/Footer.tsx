export default function Footer() {
  return (
    <footer className="mt-12 py-8 text-center text-gray-500">
      <div className="mx-auto max-w-4xl px-6">
        <p>
          &copy; {new Date().getFullYear()} Artur Tabor. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://github.com/Zdartyy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/artur-tabor-906826313/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
