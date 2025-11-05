export default async function handler(req, res) {
  try {
    console.log("🔍 GitHub GraphQL API called...");

    const query = `
      {
        user(login: "anujpundora") {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                  color
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      const text = await response.text();
     
      throw new Error(`GitHub API error: ${response.status} - ${text}`);
    }

    const data = await response.json();
    console.log("✅ GitHub data received:", JSON.stringify(data, null, 2));

    res.status(200).json(data);
  } catch (error) {
    console.error("🔥 Serverless function crashed:", error);
    res.status(500).json({ error: error.message });
  }
}