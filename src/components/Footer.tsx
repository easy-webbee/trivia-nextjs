import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full border-t mt-10 py-4 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Trivia Quiz. All rights reserved.</p>
      <p className="mt-1">
        Made with ❤️ using <span className="font-medium">Next.js</span> &{" "}
        <span className="font-medium">shadcn/ui</span>
      </p>
    </footer>
  );
};
