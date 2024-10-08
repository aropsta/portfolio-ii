import * as React from "react";
import { SVGProps } from "react";
const LinkedInLink = (props: SVGProps<SVGSVGElement>) => (
  <a
    href="https://www.linkedin.com/in/arob-d-90ba60192/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:fill-primary transition-colors duration-[250ms]"
  >
    <span className="sr-only">LinkedIn</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 1792 1792"
      {...props}
    >
      <path
        // className="fill-black group-hover:fill-primary transition-colors"
        d="M365 1414h231V720H365v694zm246-908q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5T479 626h1q59 0 95-34.5t36-85.5zm585 908h231v-398q0-154-73-233t-193-79q-136 0-209 117h2V720H723q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zm468-998v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z"
      />
    </svg>
  </a>
);
export default LinkedInLink;
