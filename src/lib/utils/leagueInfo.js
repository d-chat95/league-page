/*   STEP 1   */
export const leagueID = "997247285010509824"; // your league ID
export const leagueName = "Kids_From_New_Jersey"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p> heres the site.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    [
    {
        "user_id": "338746894941425664",
        "settings": null,
        "metadata": {
            "team_name": "Big Blue Lives Matter",
            "mention_pn": "on",
            "avatar": "https://sleepercdn.com/uploads/e60b533560cb47020c931ffa71686cea.jpg",
            "allow_pn": "on"
        },
        "league_id": "997247285010509824",
        "is_owner": null,
        "is_bot": false,
        "display_name": "parthv18",
        "avatar": "075fe66610341350b439e893ba517e2e"
    },
    {
        "user_id": "372168672137129984",
        "settings": null,
        "metadata": {
            "user_message_pn": "on",
            "transaction_waiver": "off",
            "transaction_trade": "on",
            "transaction_free_agent": "on",
            "transaction_commissioner": "on",
            "trade_block_pn": "on",
            "team_name_update": "off",
            "player_nickname_update": "off",
            "player_like_pn": "on",
            "mention_pn": "on",
            "mascot_message": "on",
            "league_report_pn": "on",
            "allow_pn": "on"
        },
        "league_id": "997247285010509824",
        "is_owner": null,
        "is_bot": false,
        "display_name": "ashroff",
        "avatar": "075fe66610341350b439e893ba517e2e"
    },
    {
        "user_id": "476217227473842176",
        "settings": null,
        "metadata": {
            "team_name": "Omis Battalion ",
            "mention_pn": "on",
            "allow_pn": "on"
        },
        "league_id": "997247285010509824",
        "is_owner": null,
        "is_bot": false,
        "display_name": "AlokVaidya",
        "avatar": "0b99d6cc26aa7519e37cdfb269184da3"
    },
    {
        "user_id": "606293866928218112",
        "settings": null,
        "metadata": {
            "mention_pn": "on",
            "allow_pn": "on"
        },
        "league_id": "997247285010509824",
        "is_owner": null,
        "is_bot": false,
        "display_name": "akhilgopu",
        "avatar": "320f9195b391718105e27b8cc9d40277"
    },
    {
        "user_id": "871223895636799488",
        "settings": null,
        "metadata": {
            "team_name": "Im Stuck Step Burrow",
            "mention_pn": "on",
            "avatar": "https://sleepercdn.com/uploads/3a1aa57c9716e4b719ba011397265989.jpg",
            "allow_sms": "on",
            "allow_pn": "on"
        },
        "league_id": "997247285010509824",
        "is_owner": null,
        "is_bot": false,
        "display_name": "shauryabaxi",
        "avatar": "b3338675f635c2c1f42b469621d38ec6"
    },
    {
        "user_id": "965089099344408576",
        "settings": null,
        "metadata": {
            "team_name": "Daniel Suarez",
            "mention_pn": "on",
            "avatar": "https://sleepercdn.com/uploads/6f8d807b743451978b104ae8168d9999.jpg",
            "allow_pn": "on"
        },
        "league_id": "997247285010509824",
        "is_owner": null,
        "is_bot": false,
        "display_name": "buckeyelover",
        "avatar": "b319fdf8b7b5b0359d3c78622ba4d70c"
    },
    {
        "user_id": "997245839380660224",
        "settings": null,
        "metadata": {
            "team_name": "Kars 4 Kidz",
            "mention_pn": "on",
            "avatar": "https://sleepercdn.com/uploads/fc4efaae9cd599f9e093c998f8e03130.jpg",
            "allow_pn": "on"
        },
        "league_id": "997247285010509824",
        "is_owner": true,
        "is_bot": false,
        "display_name": "karanshah17",
        "avatar": "e7af4deab0289b4f5505646424895246"
    },
    {
        "user_id": "997346695371399168",
        "settings": null,
        "metadata": {
            "user_message_pn": "off",
            "transaction_waiver": "off",
            "transaction_trade": "off",
            "transaction_free_agent": "off",
            "transaction_commissioner": "off",
            "trade_block_pn": "off",
            "team_name_update": "off",
            "team_name": "Chucky Cheese",
            "player_nickname_update": "off",
            "player_like_pn": "off",
            "mention_pn": "on",
            "mascot_message": "off",
            "avatar": "https://sleepercdn.com/uploads/ed388b69e5ed0c91bd6e4eff9d3efb9a.jpg",
            "allow_pn": "off"
        },
        "league_id": "997247285010509824",
        "is_owner": null,
        "is_bot": false,
        "display_name": "charleslian3",
        "avatar": "b124b19118f728f0d7eb7d0b39f70cf7"
    },
    {
        "user_id": "999211710097506304",
        "settings": null,
        "metadata": {
            "team_name": "Ariana Grande Enthusiasts",
            "mention_pn": "on",
            "avatar": "https://sleepercdn.com/uploads/d9f5fcfb2e594fc2ec1d82d74d31fd35.jpg",
            "allow_sms": "on",
            "allow_pn": "on"
        },
        "league_id": "997247285010509824",
        "is_owner": null,
        "is_bot": false,
        "display_name": "shivvycakes",
        "avatar": "b319fdf8b7b5b0359d3c78622ba4d70c"
    },
    {
        "user_id": "999334933187391488",
        "settings": null,
        "metadata": {
            "team_name": "I am Ty-reek",
            "mention_pn": "on",
            "avatar": "https://sleepercdn.com/uploads/5b287698d24311fec666617636cb014a",
            "allow_pn": "on"
        },
        "league_id": "997247285010509824",
        "is_owner": null,
        "is_bot": false,
        "display_name": "justnkev",
        "avatar": "4df6713a65b07ec3c918f0895c03c0a4"
    },
    {
        "user_id": "1001933946474549248",
        "settings": null,
        "metadata": {
            "mention_pn": "on",
            "allow_pn": "on"
        },
        "league_id": "997247285010509824",
        "is_owner": false,
        "is_bot": false,
        "display_name": "aditisingh",
        "avatar": "4f4090e5e9c3941414db40a871e3e909"
    }
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
