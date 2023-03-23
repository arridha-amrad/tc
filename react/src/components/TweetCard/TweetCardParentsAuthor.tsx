import { FC } from "react";
import { useNavigate } from "react-router-dom";

const TweetParentsAuthor: FC<{ authors: string[] }> = ({ authors }) => {
  const navigate = useNavigate();
  return (
    <ul className="flex flex-wrap gap-1 text-sm text-blue-500 dark:text-blue-300 p-0 m-0">
      Replying to
      {authors.map((author, i) => (
        <li
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/profile/${author}`);
          }}
          key={i}
        >
          {authors.length > 1 && i + 1 === authors.length ? (
            <span>
              and <span className="hover:underline">@{author}</span>
              {i + 1 === authors.length && <span>.</span>}
            </span>
          ) : (
            <span className="hover:underline">
              @{author}
              {i + 1 === authors.length ? (
                <span>.</span>
              ) : (
                i + 2 !== authors.length && <span>,</span>
              )}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TweetParentsAuthor;
