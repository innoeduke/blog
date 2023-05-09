import Link from "next/link";

async function fetchRepoContents(name) {
  const response = await fetch(
    `https://api.github.com/repos/innoeduke/${name}/contents`
  );
  const contents = await response.json();
  return contents;
}

const RepoDir = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs =
    Array.isArray(contents) &&
    contents.filter((content) => content.type === "dir");

  return (
    <div>
      <h3>Directories</h3>
      <ul>
        {dirs &&
          dirs.map((dir) => (
            <li key={dir.path}>
              <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RepoDir;
