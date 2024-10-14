"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import dayjs from "dayjs";
import Calendar from "react-github-contribution-calendar";
import "./GithubLinkBox.css";
import { GithubIc } from "svg/index";

function GithubLinkBox() {
  const [data, setData] = useState<Record<string, number>>({});
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
      }),
      body: JSON.stringify({
        query: `
        query($userName:String!) {
          user(login: $userName){
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
        `,
        variables: { userName: "kimsunin" },
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        const result: { [key: string]: number } = {};
        for (const week of json?.data?.user?.contributionsCollection
          ?.contributionCalendar?.weeks) {
          for (const day of week.contributionDays) {
            result[day.date] = day.contributionCount;
          }
        }
        setData(result);
      })
      .catch((err) => console.error("github error", err));
  }, []);

  return (
    <Link
      href={"https://github.com/kimsunin"}
      target={"_blank"}
      className={"github-link-box"}
    >
      <div>
        <div className={"icon-box"}>
          <GithubIc />
        </div>
        <span>GitHub</span>
      </div>
      <div>
        <Calendar
          values={data}
          until={dayjs().format("YYYY-MM-DD")}
          weekLabelAttributes={{}}
          monthLabelAttributes={{}}
          panelAttributes={{}}
          panelColors={[
            resolvedTheme == "light" ? "#0000001A" : "#ffffff33",
            "#9be9a8",
            "#40c463",
            "#30a14e",
            "#216e39",
          ]}
        />
      </div>
    </Link>
  );
}

export default GithubLinkBox;
