document.addEventListener("DOMContentLoaded", () => {

    const platformText = document.getElementById("platform");

    // DEFAULT PROGRESS 
    const DEFAULT_PROGRESS = {
        arrays: 0,
        strings: 0,
        dp: 0,
        binary: 0,
        twoptr: 0,
        trees: 0,
        graphs: 0
    };

    let currentProgress = { ...DEFAULT_PROGRESS };

    // LOAD PROGRESS 
    function loadProgress() {
        chrome.storage.local.get(["progress"], (data) => {
            if (data.progress) {
                currentProgress = data.progress;
            }
            renderProgress();
        });
    }

    // SAVE PROGRESS
    function saveProgress() {
        chrome.storage.local.set({ progress: currentProgress });
    }

    //  UPDATE UI 
    function renderProgress() {
        document.getElementById("arrays-done").textContent = currentProgress.arrays;
        document.getElementById("strings-done").textContent = currentProgress.strings;
        document.getElementById("dp-done").textContent = currentProgress.dp;
        document.getElementById("binary-done").textContent = currentProgress.binary;
        document.getElementById("twoptr-done").textContent = currentProgress.twoptr;
        document.getElementById("trees-done").textContent = currentProgress.trees;
        document.getElementById("graphs-done").textContent = currentProgress.graphs;
    }

    // PLATFORM DETECTION 
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (!tabs || !tabs[0] || !tabs[0].url) return;

        const url = tabs[0].url;

        if (url.includes("leetcode.com")) {
            platformText.textContent = "Platform: LeetCode";
        } else if (url.includes("geeksforgeeks.org")) {
            platformText.textContent = "Platform: GeeksForGeeks";
        } else {
            platformText.textContent = "Open LeetCode or GFG to begin";
        }
    });

    // HELPER: ATTACH INCREMENT BUTTON 
    function attachIncrement(btnId, key) {
        const btn = document.getElementById(btnId);
        if (!btn) return;

        btn.addEventListener("click", () => {
            if (currentProgress[key] < 10) {
                currentProgress[key]++;
                renderProgress();
                saveProgress();
            }
        });
    }

    // Attach all 7 increment buttons
    attachIncrement("arrays-add", "arrays");
    attachIncrement("strings-add", "strings");
    attachIncrement("dp-add", "dp");
    attachIncrement("binary-add", "binary");
    attachIncrement("twoptr-add", "twoptr");
    attachIncrement("trees-add", "trees");
    attachIncrement("graphs-add", "graphs");

    //  RESET BUTTON 
    const resetBtn = document.getElementById("reset");

    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            currentProgress = { ...DEFAULT_PROGRESS };
            renderProgress();
            saveProgress();
        });
    }

    // DAILY QUESTIONS FEATURE 

    const allQuestions = [
        "Two Sum",
        "Valid Anagram",
        "Best Time to Buy and Sell Stock",
        "Contains Duplicate",
        "Valid Palindrome",
        "Longest Common Prefix",
        "Group Anagrams",
        "Merge Intervals",
        "Binary Search",
        "Climbing Stairs",
        "Coin Change",
        "Linked List Cycle",
        "Reverse Linked List",
        "Flood Fill",
        "Number of Islands",
        "Permutations",
        "Subsets",
        "Two Sum II",
        "Squares of a Sorted Array",
        "Move Zeroes",
        "House Robber",
        "Kth Largest Element"
    ];

    function generateDailyQuestions() {
        const list = document.getElementById("daily-questions");
        list.innerHTML = ""; // clear previous

        // Pick 3 random questions
        const selected = [];
        while (selected.length < 3) {
            const q = allQuestions[Math.floor(Math.random() * allQuestions.length)];
            if (!selected.includes(q)) selected.push(q);
        }

        // Add to UI
        selected.forEach(q => {
            const li = document.createElement("li");
            li.textContent = q;
            list.appendChild(li);
        });

        // Save today's questions
        chrome.storage.local.set({ todayQuestions: selected });
    }

    // Load saved questions or generate new ones
    chrome.storage.local.get(["todayQuestions"], (data) => {
        if (data.todayQuestions) {
            const list = document.getElementById("daily-questions");
            data.todayQuestions.forEach(q => {
                const li = document.createElement("li");
                li.textContent = q;
                list.appendChild(li);
            });
        } else {
            generateDailyQuestions();
        }
    });

    // Button: new set
    document.getElementById("new-questions").addEventListener("click", () => {
        generateDailyQuestions();
    });


    // Load saved progress on popup open
    loadProgress();
});
