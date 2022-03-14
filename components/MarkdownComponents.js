import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import slugify from "slugify";

let slugifyHeader = (children) => {
  let slug;
  if(Array.isArray(children)) {
    slug = slugify(children.join('').toLowerCase(), { remove: /[*+~.()'"!:@]/g });
  }
  else {
    slug = slugify(children.toLowerCase(), { remove: /[*+~.()'",!:@]/g });
  }

  return slug;
}

const CustomH2 = ({ children }) => {

  let slug = slugifyHeader(children);
  return (
    <div className="flex items-center">
      <h2 id={slug}>{children}</h2>
      <a href={`#${slug}`}>
        <FontAwesomeIcon
          icon={faLink}
          className="h-4 ml-2 text-gray-300 hover:text-blue-500"
        ></FontAwesomeIcon>
      </a>
    </div>
  );
};

const CustomH3 = ({ children }) => {

  let slug = slugifyHeader(children);

  return (
    <div className="flex items-center">
      <h3 id={slug}>{children}</h3>
      <a href={`#${slug}`}>
        <FontAwesomeIcon
          icon={faLink}
          className="h-4 ml-2 text-gray-300 hover:text-blue-500"
        ></FontAwesomeIcon>
      </a>
    </div>
  );
};

const MarkdownComponents = {
  h2: CustomH2,
  h3: CustomH3
};

export default MarkdownComponents;
