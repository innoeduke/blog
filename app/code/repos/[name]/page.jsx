import Link from "next/link";
import Repo from "@/app/components/Repo";
import RepoDir from "@/app/components/RepoDir";
import { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
  return (
    <div>
      <div className="card">
        <Link href="/code/repos" className="btn btn-back">
          Back to Repositories
        </Link>
        <Suspense fallback={<div>Loading repo...</div>}>
          <Repo name={name}></Repo>
        </Suspense>
        <Suspense fallback={<div>Loading directories</div>}>
          <RepoDir name={name}></RepoDir>
        </Suspense>
      </div>
    </div>
  );
};

export default RepoPage;
