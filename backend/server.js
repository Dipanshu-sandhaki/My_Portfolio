const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/leetcode", async (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: "Username is required" });

  try {
    const response = await axios.post("https://leetcode.com/graphql", {
      query: `
        query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            username
            profile {
              realName
              userAvatar
              ranking
              countryName
              aboutMe
            }
            submitStats {
              acSubmissionNum {
                difficulty
                count
              }
              totalSubmissionNum {
                difficulty
                count
              }
            }
          }
        }
      `,
      variables: { username }
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const user = response.data.data.matchedUser;

    // ✅ Calculate totalSolved manually
    const totalSolved = user.submitStats.acSubmissionNum.reduce(
      (sum, item) => sum + item.count, 0
    );

    res.json({
      username: user.username,
      profile: user.profile,
      submitStats: {
        acSubmissionNum: user.submitStats.acSubmissionNum,
        totalSolved: totalSolved
      }
    });

  } catch (err) {
    console.error("Error fetching LeetCode data:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch LeetCode data" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 LeetCode proxy server running at http://localhost:${PORT}`);
});
