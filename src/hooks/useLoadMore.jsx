import { useCallback, useEffect, useState } from "react";

export default function useLoadMore(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [issues, setIssues] = useState([]);
  const [showIssues, setShowIssues] = useState([]);
  let hasMore = issues.length < 1 ? true : pageNumber < issues.length;

  const getIssues = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(
        "https://api.github.com/repos/facebook/react/issues"
      );
      if (response.ok) {
        const data = await response.json();
        setIssues(data);
        setShowIssues(data.slice(0, 5));
        setLoading(false);
      }
    } catch (e) {
      setError(true);
    }
  }, []);

  useEffect(() => {
    getIssues();
  }, [getIssues]);

  useEffect(() => {
    if (pageNumber === 0) return;
    setShowIssues((prev) => [
      ...prev,
      ...issues.slice(pageNumber * 5, (pageNumber + 1) * 5),
    ]);
  }, [pageNumber, issues]);

  return { loading, error, showIssues, hasMore };
}
