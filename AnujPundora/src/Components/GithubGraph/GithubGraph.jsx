import { useEffect, useState } from "react";

function GithubGraph() {
  const [days, setDays] = useState([]);

 useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/githubGraph");
        const data = await res.json();

        const weeks = data?.data?.user?.contributionsCollection?.contributionCalendar?.weeks;
        if (!weeks) {
          console.error("Unexpected GitHub data:", data);
          return;
        }

        // Flatten GitHub data to get all contribution days
        const allDays = weeks.flatMap(week => week.contributionDays);

        // Get current month details
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth(); // 0-indexed: 0 = Jan, 10 = Nov
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Create an array of all dates in the current month
        const allMonthDates = Array.from({ length: daysInMonth }, (_, i) => {
          const date = new Date(year, month, i + 1);
          return date.toISOString().slice(0, 10); // "YYYY-MM-DD"
        });

        // Merge GitHub data with full month dates
        const fullMonthDays = allMonthDates.map(dateStr => {
          const gitDay = allDays.find(day => day.date === dateStr);
          return gitDay || { date: dateStr, contributionCount: 0, color: "#ebedf0" };
        });

        setDays(fullMonthDays);
      } catch (err) {
        console.error("Error fetching GitHub data:", err);
      }
    };

    load();
  }, []);
  //For getting the total Contribution
  const totalContributions = days.reduce(
    (sum, day) => sum + day.contributionCount,
    0
  );
//for Getting the month name
  const now = new Date();
 const monthName = now.toLocaleString("default", { month: "long" });

 //For deciding the color of contribution Graph
 const getGoldColor = (count) => {
  if (count === 0) return "#d3d3d3";       
  if (count < 2) return "#fff2b8";          
  if (count < 5) return "#ffe066";         
  if (count < 10) return "#ffd700";        
  return "#bfa12f";                         
};

  return (
    <div className=" flex flex-col items-center gap-10 pb-20 justify-center w-full  ">
      <h1 id="heading"
        className="flex gap-2 text-5xl">
          GITHUB CONTRIBUTION FOR THIS
           <span className=" font-bold text-[#FFB606]">MONTH</span>
      </h1> 
        <div className=" rounded-xl bg-[#1A1A1A]   hover:shadow-[0_0_20px_#fff2b8] w-2/4 font-thin">
        <h1
          className=" m-5 mb-2.5 text-2xl"
          >{monthName}</h1>
        <div className="grid grid-rows-7 grid-flow-col w-full gap-x-0 gap-y-2 p-10 pb-5 pt-0 pr-0  ">
      
          {days.map(day => (
            <div className="relative group">
              <div
                style={{ backgroundColor: getGoldColor(day.contributionCount) }}
                className="w-6 h-6 rounded-sm"
              />
              <div className="absolute bottom-full mb-1 hidden group-hover:block text-xs bg-[#1A1A1A] text-white p-1 rounded">
                {` ${day.contributionCount} commits on ${day.date} `}
              </div>
            </div>
          ))}
          </div>
          <div className="flex justify-between px-2.5 pb-2.5 ">
              <h1 >
                  This month contributions: {totalContributions}</h1>
              <div className=" flex gap-2">
                <p>Less</p>
                <div className=" h-5 w-5 rounded-sm bg-[#d3d3d3]"></div>
                <div className=" h-5 w-5 rounded-sm bg-[#fff2b8]"></div>
                <div className=" h-5 w-5 rounded-sm bg-[#ffe066]"></div>
                <div className=" h-5 w-5 rounded-sm bg-[#ffd700]"></div>
                <p>More</p>
              </div>
          </div>
    </div>
    </div>
  );
}

export default GithubGraph;