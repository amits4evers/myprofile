export interface TutorialSection {
  heading: string;
  content: string[];
  code?: string;
  table?: { headers: string[]; rows: string[][] };
  list?: string[];
}

export interface Tutorial {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  sections: TutorialSection[];
}

export const tutorials: Tutorial[] = [
  {
    id: "data-analyst-roadmap",
    title: "Data Analyst Roadmap",
    category: "Roadmap",
    icon: "Map",
    description: "A complete roadmap to becoming a Data Analyst — from basics to advanced topics.",
    level: "Beginner",
    estimatedTime: "30 min read",
    sections: [
      {
        heading: "What is a Data Analyst?",
        content: [
          "A Data Analyst collects, cleans, and interprets data to help organizations make better decisions. They work with data from various sources — databases, spreadsheets, APIs, and web pages — and transform it into reports, dashboards, and visualizations.",
          "The role of a Data Analyst sits at the intersection of business and technology. You need technical skills to work with data and business acumen to understand what the data means in context.",
        ],
      },
      {
        heading: "The Complete Roadmap",
        content: [
          "Here is the step-by-step path you should follow to become a Data Analyst. Each step builds on the previous one.",
        ],
        list: [
          "Step 1: Learn the fundamentals of statistics and mathematics",
          "Step 2: Master Microsoft Excel — formulas, pivot tables, charts, Power Query",
          "Step 3: Learn SQL — querying, filtering, joins, aggregations, window functions",
          "Step 4: Learn Python — basics, then Pandas and NumPy for data work",
          "Step 5: Learn data collection techniques — APIs and web scraping",
          "Step 6: Learn data cleaning and preprocessing",
          "Step 7: Learn data visualization — Matplotlib, Seaborn, Power BI, Tableau",
          "Step 8: Learn statistical analysis and hypothesis testing",
          "Step 9: Build projects to apply your skills",
          "Step 10: Create a portfolio and apply for jobs",
        ],
      },
      {
        heading: "Core Skills Overview",
        content: [
          "The roadmap covers both technical and soft skills. Technical skills include programming, databases, and visualization tools. Soft skills include communication, problem-solving, and critical thinking.",
        ],
        table: {
          headers: ["Skill Area", "Tools / Technologies", "Importance"],
          rows: [
            ["Spreadsheets", "Excel, Google Sheets", "Foundational — used everywhere"],
            ["Databases", "SQL, PostgreSQL, MySQL", "Essential for data extraction"],
            ["Programming", "Python, Pandas, NumPy", "For automation and advanced analysis"],
            ["Visualization", "Power BI, Tableau, Matplotlib", "For communicating insights"],
            ["Statistics", "Mean, median, std dev, hypothesis testing", "For understanding data"],
            ["Web Scraping", "BeautifulSoup, Selenium, Scrapy", "For data collection"],
            ["Communication", "Reports, dashboards, presentations", "For sharing findings"],
          ],
        },
      },
      {
        heading: "Recommended Learning Path",
        content: [
          "Follow the tutorials on this blog in this order:",
        ],
        list: [
          "1. Analysis & Reporting with Excel — learn spreadsheet fundamentals",
          "2. SQL Tutorials — learn to query databases",
          "3. Python Tutorials — learn programming from scratch",
          "4. NumPy Tutorials — learn numerical computing",
          "5. Pandas Tutorials — learn data manipulation",
          "6. Data Collection, Cleaning, Exploration, Transformation, Manipulation — full data workflow",
          "7. Data Visualization — charts and graphs",
          "8. Charting & Pivot Tables — advanced reporting",
          "9. Web Scraping Tutorials — collect data from the web",
          "10. Power BI Tutorials — build interactive dashboards",
          "11. 10 Data Analyst Projects — apply everything you learned",
        ],
      },
      {
        heading: "Full Roadmap Reference",
        content: [
          "For a visual, interactive version of the Data Analyst roadmap, visit the official roadmap at roadmap.sh. It provides a detailed, community-driven path with links to resources for each topic.",
          "Roadmap URL: https://roadmap.sh/data-analyst",
        ],
      },
    ],
  },

  {
    id: "excel-analysis-reporting",
    title: "Analysis & Reporting with Excel",
    category: "Spreadsheets",
    icon: "FileSpreadsheet",
    description: "Complete guide to data analysis and reporting using Microsoft Excel — from basic formulas to advanced dashboards.",
    level: "Beginner",
    estimatedTime: "45 min read",
    sections: [
      {
        heading: "Introduction to Excel for Data Analysis",
        content: [
          "Microsoft Excel is the most widely used tool for data analysis. Even in the age of Python and Power BI, Excel remains essential because it is accessible, powerful, and ubiquitous in business environments.",
          "In this tutorial, we cover everything from basic formulas to advanced features like Power Query, pivot tables, and dashboard creation.",
        ],
      },
      {
        heading: "1. Excel Interface & Basics",
        content: [
          "Excel organizes data in a grid of cells arranged in rows (numbered 1, 2, 3...) and columns (labeled A, B, C...). Each cell is identified by its column letter and row number, e.g., A1, B5, Z100.",
          "Key components:",
        ],
        list: [
          "Ribbon — the toolbar at the top with tabs like Home, Insert, Data, Formulas",
          "Formula Bar — shows the formula or value of the selected cell",
          "Worksheet — a single page of cells; a workbook can have multiple worksheets",
          "Status Bar — shows summary info like sum, count, average of selected cells",
        ],
      },
      {
        heading: "2. Data Entry & Formatting",
        content: [
          "You can enter text, numbers, dates, and formulas into cells. Formatting helps make data readable and consistent.",
        ],
        list: [
          "Number formatting: currency, percentage, date, custom formats",
          "Conditional formatting: color cells based on values (e.g., highlight values > 100)",
          "Data validation: restrict what can be entered (e.g., only numbers 1-100)",
          "Sorting: arrange data alphabetically or numerically",
          "Filtering: show only rows that meet certain criteria",
        ],
      },
      {
        heading: "3. Essential Formulas",
        content: [
          "Formulas are the heart of Excel. They start with an = sign and can reference other cells.",
          "Basic arithmetic formulas:",
        ],
        code: `=A1 + B1        (Addition)
=A1 - B1        (Subtraction)
=A1 * B1        (Multiplication)
=A1 / B1        (Division)
=A1 ^ 2         (Exponentiation)
=A1 ^ (1/2)     (Square root)`,
      },
      {
        heading: "4. Statistical Functions",
        content: [
          "Excel has built-in functions for common statistical calculations.",
        ],
        code: `=SUM(A1:A10)          (Sum of range)
=AVERAGE(A1:A10)      (Mean)
=MEDIAN(A1:A10)       (Middle value)
=MODE(A1:A10)         (Most frequent value)
=MIN(A1:A10)          (Minimum)
=MAX(A1:A10)          (Maximum)
=COUNT(A1:A10)        (Count of numeric cells)
=COUNTA(A1:A10)       (Count of non-empty cells)
=COUNTIF(A1:A10,">50") (Count cells matching criteria)
=STDEV.P(A1:A10)      (Population standard deviation)
=STDEV.S(A1:A10)      (Sample standard deviation)
=VAR.P(A1:A10)        (Population variance)
=VAR.S(A1:A10)        (Sample variance)
=QUARTILE.INC(A1:A10,1) (First quartile)
=PERCENTILE.INC(A1:A10,0.9) (90th percentile)`,
      },
      {
        heading: "5. Logical Functions",
        content: [
          "Logical functions let you make decisions in your formulas.",
        ],
        code: `=IF(A1>50,"Pass","Fail")              (Conditional)
=IF(A1>90,"A",IF(A1>80,"B",IF(A1>70,"C","F")))  (Nested IF)
=AND(A1>50, B1>50)                     (Both true?)
=OR(A1>50, B1>50)                      (Either true?)
=NOT(A1>50)                            (Opposite)
=IFS(A1>90,"A",A1>80,"B",A1>70,"C",TRUE,"F")  (Multiple conditions)`,
      },
      {
        heading: "6. Lookup Functions",
        content: [
          "Lookup functions find data in tables — essential for combining data from different sources.",
        ],
        code: `=VLOOKUP(A1, B1:D100, 2, FALSE)
  (Find A1 in first column of B1:D100, return value from 2nd column, exact match)

=HLOOKUP(A1, A1:Z10, 3, FALSE)
  (Horizontal lookup — searches first row)

=INDEX(B1:B100, 5)
  (Return 5th value from range B1:B100)

=MATCH(A1, B1:B100, 0)
  (Return position of A1 in range B1:B100)

=INDEX(B1:B100, MATCH(A1, A1:A100, 0))
  (Index + Match — more flexible than VLOOKUP)

=XLOOKUP(A1, A1:A100, B1:B100)
  (Modern replacement for VLOOKUP — Excel 365+)`,
      },
      {
        heading: "7. Text Functions",
        content: [
          "Text functions manipulate string data — useful for cleaning messy data.",
        ],
        code: `=LEFT(A1, 5)          (First 5 characters)
=RIGHT(A1, 5)         (Last 5 characters)
=MID(A1, 2, 5)        (5 characters starting at position 2)
=LEN(A1)              (Length of text)
=UPPER(A1)            (Convert to uppercase)
=LOWER(A1)            (Convert to lowercase)
=PROPER(A1)           (Capitalize first letter of each word)
=TRIM(A1)             (Remove extra spaces)
=SUBSTITUTE(A1,"old","new")  (Replace text)
=CONCATENATE(A1," ",B1)  (Join text) or =A1 & " " & B1
=TEXT(A1, "0.00")     (Format number as text)`,
      },
      {
        heading: "8. Date & Time Functions",
        content: [
          "Excel stores dates as serial numbers, making date arithmetic possible.",
        ],
        code: `=TODAY()                  (Current date)
=NOW()                    (Current date and time)
=DATE(2024,12,31)         (Create a date)
=YEAR(A1)                 (Extract year)
=MONTH(A1)                (Extract month)
=DAY(A1)                  (Extract day)
=WEEKDAY(A1)              (Day of week as number)
=DATEDIF(A1,B1,"Y")       (Years between dates)
=EOMONTH(A1, 0)           (End of month)
=NETWORKDAYS(A1,B1)       (Working days between dates)`,
      },
      {
        heading: "9. Pivot Tables",
        content: [
          "Pivot tables are one of the most powerful features in Excel. They let you summarize, group, and analyze large datasets with just a few clicks.",
          "How to create a pivot table:",
        ],
        list: [
          "1. Select your data range (or a cell within your data)",
          "2. Go to Insert > PivotTable",
          "3. Choose where to place the pivot table (new or existing worksheet)",
          "4. In the PivotTable Fields pane, drag fields to four areas:",
          "   — Rows: fields to group by (e.g., Region)",
          "   — Columns: fields to split across columns (e.g., Month)",
          "   — Values: fields to aggregate (e.g., Sum of Sales)",
          "   — Filters: fields to filter the entire table (e.g., Year)",
          "5. Change aggregation: right-click values > Summarize Values By > Sum/Average/Count/etc.",
          "6. Add calculated fields: PivotTable Analyze > Fields, Items & Sets > Calculated Field",
        ],
      },
      {
        heading: "10. Pivot Charts",
        content: [
          "Pivot charts visualize pivot table data. They are linked — filtering or slicing the pivot table automatically updates the chart.",
          "To create: select the pivot table > Insert > PivotChart > choose chart type.",
        ],
      },
      {
        heading: "11. Power Query",
        content: [
          "Power Query is Excel's data transformation tool. It lets you import, clean, and transform data from various sources without writing code.",
          "Common Power Query operations:",
          "To use Power Query: Data > Get Data > choose source > the Power Query Editor opens where you apply transformations step by step. Each step is recorded and can be replayed when data refreshes.",
        ],
        list: [
          "Connect to sources: Excel files, CSV, databases, web pages, APIs",
          "Remove columns and rows",
          "Filter and sort data",
          "Split columns (e.g., split full name into first and last)",
          "Merge queries (like SQL JOIN)",
          "Append queries (like SQL UNION)",
          "Group and aggregate",
          "Unpivot columns (wide to long format)",
          "Replace values and handle errors",
        ],
      },
      {
        heading: "12. Conditional Formatting",
        content: [
          "Conditional formatting automatically applies colors, icons, or data bars to cells based on their values.",
        ],
        list: [
          "Highlight cells rules: greater than, less than, between, equal to, text contains, dates occurring, duplicate values",
          "Top/Bottom rules: top 10 items, top 10%, above average, below average",
          "Data bars: show value as a horizontal bar within the cell",
          "Color scales: gradient from green (high) to red (low)",
          "Icon sets: arrows, traffic lights, rating stars",
          "Custom formula: apply formatting based on any formula",
        ],
      },
      {
        heading: "13. Creating Dashboards in Excel",
        content: [
          "An Excel dashboard combines multiple charts, tables, and KPIs on a single sheet for at-a-glance analysis.",
        ],
        list: [
          "1. Plan your dashboard: identify the key metrics and audience",
          "2. Prepare data: use pivot tables or Power Query to summarize",
          "3. Create charts: bar, line, pie, donut, scatter for different metrics",
          "4. Add slicers: Insert > Slicer — these are interactive filters",
          "5. Arrange charts on a blank sheet — remove gridlines for a clean look",
          "6. Add KPI cards: use text boxes or cells with large numbers and labels",
          "7. Connect multiple pivot tables to one slicer for synchronized filtering",
          "8. Protect the sheet to prevent accidental changes",
        ],
      },
      {
        heading: "14. Excel Tips for Productivity",
        content: [
          "Shortcuts and techniques that save time:",
        ],
        list: [
          "Ctrl + Arrow keys: jump to edge of data region",
          "Ctrl + Shift + Arrow: select to edge of data",
          "Ctrl + ; : insert current date",
          "Alt + = : auto-sum selected cells",
          "F4: toggle absolute/relative references ($A$1 vs A1)",
          "Ctrl + 1: format cells dialog",
          "Named ranges: give a name to a range (Formulas > Define Name) and use it in formulas",
          "Tables: Ctrl + T converts a range to a table — auto-expanding, structured references",
        ],
      },
    ],
  },

  {
    id: "data-analyst-tutorial",
    title: "Data Analyst Tutorial — Complete Guide",
    category: "Data Analytics",
    icon: "BarChart3",
    description: "Deep dive into every concept a Data Analyst needs — from data fundamentals to advanced analysis techniques.",
    level: "Beginner",
    estimatedTime: "60 min read",
    sections: [
      {
        heading: "What Does a Data Analyst Do?",
        content: [
          "A Data Analyst's job can be broken down into a pipeline of stages:",
        ],
        list: [
          "1. Data Collection — gather data from databases, files, APIs, and web sources",
          "2. Data Cleaning — fix errors, handle missing values, standardize formats",
          "3. Data Exploration — understand the data through summary statistics and visualization",
          "4. Data Transformation — reshape, aggregate, and prepare data for analysis",
          "5. Data Analysis — apply statistical methods to answer business questions",
          "6. Data Visualization — create charts and dashboards to communicate findings",
          "7. Reporting — present insights to stakeholders in reports and presentations",
        ],
      },
      {
        heading: "Types of Data",
        content: [
          "Understanding data types is fundamental to analysis.",
        ],
        table: {
          headers: ["Type", "Description", "Examples"],
          rows: [
            ["Nominal", "Categories with no order", "Colors, names, gender"],
            ["Ordinal", "Categories with order", "Low/Medium/High, ratings"],
            ["Interval", "Numeric, no true zero", "Temperature in Celsius, dates"],
            ["Ratio", "Numeric, true zero exists", "Height, weight, revenue"],
            ["Discrete", "Whole numbers only", "Number of customers, clicks"],
            ["Continuous", "Any value in a range", "Temperature, time, distance"],
          ],
        },
      },
      {
        heading: "Descriptive Statistics",
        content: [
          "Descriptive statistics summarize data. They are the first step in any analysis.",
        ],
        list: [
          "Mean: the average value. Sum of all values divided by count. Sensitive to outliers.",
          "Median: the middle value when data is sorted. Robust to outliers.",
          "Mode: the most frequently occurring value. Useful for categorical data.",
          "Range: difference between maximum and minimum values.",
          "Variance: average of squared differences from the mean. Measures spread.",
          "Standard Deviation: square root of variance. Same units as the data.",
          "Quartiles: Q1 (25th percentile), Q2 (median, 50th), Q3 (75th percentile).",
          "IQR (Interquartile Range): Q3 - Q1. Used for outlier detection.",
          "Skewness: measures asymmetry. Positive = right-skewed, Negative = left-skewed.",
          "Kurtosis: measures tail thickness. High kurtosis = more outliers.",
        ],
      },
      {
        heading: "Inferential Statistics",
        content: [
          "Inferential statistics use sample data to make conclusions about a population.",
        ],
        list: [
          "Population: the entire group you want to study",
          "Sample: a subset of the population",
          "Hypothesis testing: test if an assumption about the population is true",
          "Null hypothesis (H0): no effect / no difference",
          "Alternative hypothesis (H1): there is an effect / difference",
          "p-value: probability of observing the data if H0 is true. If p < 0.05, reject H0.",
          "Confidence interval: range that likely contains the true population parameter",
          "t-test: compare means of two groups",
          "ANOVA: compare means of three or more groups",
          "Chi-square test: test independence of categorical variables",
          "Correlation: measure relationship between two variables (-1 to +1)",
        ],
      },
      {
        heading: "The Data Analysis Process (CRISP-DM)",
        content: [
          "CRISP-DM (Cross-Industry Standard Process for Data Mining) is a widely used framework:",
        ],
        list: [
          "1. Business Understanding — understand the problem and objectives",
          "2. Data Understanding — explore available data, identify quality issues",
          "3. Data Preparation — clean, transform, and format data for analysis",
          "4. Modeling — apply statistical or machine learning techniques",
          "5. Evaluation — assess results against business objectives",
          "6. Deployment — present findings and implement solutions",
        ],
      },
      {
        heading: "Key Analysis Techniques",
        content: [
          "Different types of analysis answer different questions:",
        ],
        table: {
          headers: ["Analysis Type", "Question Answered", "Example"],
          rows: [
            ["Descriptive", "What happened?", "Sales report for last month"],
            ["Diagnostic", "Why did it happen?", "Why did sales drop in Q3?"],
            ["Predictive", "What will happen?", "Forecast next month's sales"],
            ["Prescriptive", "What should we do?", "Recommend best marketing strategy"],
            ["Exploratory", "What patterns exist?", "Discover customer segments"],
          ],
        },
      },
      {
        heading: "Data Quality Dimensions",
        content: [
          "Before analysis, assess data quality across these dimensions:",
        ],
        list: [
          "Accuracy: does the data reflect reality?",
          "Completeness: are there missing values?",
          "Consistency: is data consistent across sources?",
          "Timeliness: is the data current?",
          "Validity: does data conform to expected formats?",
          "Uniqueness: are there duplicate records?",
        ],
      },
      {
        heading: "Common Data Analysis Mistakes to Avoid",
        content: [
          "Avoiding these pitfalls makes you a better analyst:",
        ],
        list: [
          "Confusing correlation with causation — just because two variables move together doesn't mean one causes the other",
          "Ignoring outliers — they can distort results but also reveal important insights",
          "Cherry-picking data — selecting only data that supports your conclusion",
          "Overfitting — making a model too complex for the data it has",
          "Ignoring sample size — small samples lead to unreliable conclusions",
          "Not understanding the business context — analysis without context is just numbers",
          "Poor visualization choices — using the wrong chart type can mislead",
        ],
      },
      {
        heading: "Tools Comparison",
        content: [
          "Different tools serve different purposes in the data analysis workflow:",
        ],
        table: {
          headers: ["Tool", "Best For", "Learning Curve"],
          rows: [
            ["Excel", "Small datasets, quick analysis, reporting", "Low"],
            ["SQL", "Querying databases, large datasets", "Medium"],
            ["Python (Pandas)", "Large datasets, automation, advanced analysis", "Medium-High"],
            ["Power BI", "Interactive dashboards, business reporting", "Medium"],
            ["Tableau", "Advanced visualizations, storytelling", "Medium"],
            ["R", "Statistical analysis, research", "High"],
          ],
        },
      },
    ],
  },

  {
    id: "python-tutorial",
    title: "Python Tutorial — Complete Guide",
    category: "Programming",
    icon: "Code2",
    description: "Learn Python from scratch — every concept explained in detail, from variables to advanced features.",
    level: "Beginner",
    estimatedTime: "60 min read",
    sections: [
      {
        heading: "Why Python for Data Analysis?",
        content: [
          "Python is the most popular programming language for data analysis because it is easy to learn, has a massive ecosystem of data libraries, and has a supportive community. Libraries like Pandas, NumPy, Matplotlib, and Scikit-learn make it powerful for data work.",
        ],
      },
      {
        heading: "1. Installing Python",
        content: [
          "Download Python from python.org. Install version 3.10 or later. During installation, check 'Add Python to PATH'.",
          "Verify installation by opening a terminal and running:",
        ],
        code: `python --version
# Output: Python 3.12.0`,
      },
      {
        heading: "2. Variables and Data Types",
        content: [
          "Variables store data. Python is dynamically typed — you don't need to declare types.",
        ],
        code: `# Integer
age = 25

# Float (decimal)
price = 19.99

# String (text)
name = "Amit"

# Boolean (True/False)
is_active = True

# None (null/empty)
result = None

# Check type
print(type(age))       # <class 'int'>
print(type(name))      # <class 'str'>`,
      },
      {
        heading: "3. Strings",
        content: [
          "Strings are sequences of characters enclosed in single or double quotes.",
        ],
        code: `# Creating strings
greeting = "Hello, World!"
name = 'Amit'

# String concatenation
full = greeting + " My name is " + name

# f-strings (formatted strings)
age = 25
message = f"My name is {name} and I am {age} years old"

# String methods
text = "  Hello Python  "
print(text.strip())        # "Hello Python" (remove whitespace)
print(text.upper())        # "  HELLO PYTHON  "
print(text.lower())        # "  hello python  "
print(text.replace("Python", "World"))
print(len(text))           # length
print("Hello" in text)     # True (membership test)
print(text.split())        # split into list
print(",".join(["a","b","c"]))  # "a,b,c"`,
      },
      {
        heading: "4. Lists",
        content: [
          "Lists are ordered, mutable (changeable) collections.",
        ],
        code: `# Creating lists
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
empty = []

# Accessing elements (0-indexed)
print(numbers[0])    # 1
print(numbers[-1])   # 5 (last element)

# Slicing
print(numbers[1:4])  # [2, 3, 4]
print(numbers[:3])   # [1, 2, 3]
print(numbers[2:])   # [3, 4, 5]

# Modifying
numbers[0] = 100
numbers.append(6)         # add to end
numbers.insert(0, 0)      # insert at index
numbers.remove(100)       # remove by value
numbers.pop()             # remove last
numbers.extend([7, 8])    # add multiple

# List methods
print(len(numbers))       # length
print(numbers.sort())     # sort in place
print(numbers.reverse())  # reverse in place
print(numbers.count(5))   # count occurrences
print(numbers.index(5))   # find index

# List comprehension
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]`,
      },
      {
        heading: "5. Tuples",
        content: [
          "Tuples are like lists but immutable (cannot be changed after creation).",
        ],
        code: `# Creating tuples
point = (3, 4)
single = (5,)           # note the comma for single-item tuple
coordinates = (1.0, 2.0, 3.0)

# Accessing
print(point[0])         # 3

# Tuples are immutable
# point[0] = 5          # TypeError!

# Tuple unpacking
x, y = point
print(x, y)             # 3 4

# Useful tuple functions
print(len(coordinates))
print(min(point))
print(max(point))`,
      },
      {
        heading: "6. Dictionaries",
        content: [
          "Dictionaries store key-value pairs. Keys must be unique and immutable.",
        ],
        code: `# Creating dictionaries
person = {
    "name": "Amit",
    "age": 25,
    "city": "Mumbai"
}

# Accessing values
print(person["name"])          # Amit
print(person.get("email", "N/A"))  # N/A (default if key missing)

# Adding/updating
person["email"] = "amit@example.com"
person["age"] = 26             # update

# Removing
del person["city"]
person.pop("email")

# Dictionary methods
print(person.keys())           # dict_keys(['name', 'age'])
print(person.values())         # dict_values(['Amit', 26])
print(person.items())          # dict_items([('name', 'Amit'), ...])

# Iterating
for key, value in person.items():
    print(f"{key}: {value}")

# Dictionary comprehension
squares = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}`,
      },
      {
        heading: "7. Sets",
        content: [
          "Sets are unordered collections of unique elements.",
        ],
        code: `# Creating sets
fruits = {"apple", "banana", "cherry"}
numbers = {1, 2, 3, 3, 2, 1}  # {1, 2, 3} (duplicates removed)

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a | b)   # Union: {1, 2, 3, 4, 5, 6}
print(a & b)   # Intersection: {3, 4}
print(a - b)   # Difference: {1, 2}
print(a ^ b)   # Symmetric difference: {1, 2, 5, 6}

# Set methods
fruits.add("orange")
fruits.remove("banana")
fruits.discard("grape")   # no error if missing
print("apple" in fruits)   # True`,
      },
      {
        heading: "8. Control Flow — If/Else",
        content: [
          "Conditional statements control which code runs based on conditions.",
        ],
        code: `score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Grade: {grade}")  # Grade: B

# Multiple conditions
age = 25
has_license = True

if age >= 18 and has_license:
    print("Can drive")
elif age >= 18 and not has_license:
    print("Can get a license")
else:
    print("Too young to drive")`,
      },
      {
        heading: "9. Loops",
        content: [
          "Loops repeat code. Python has for loops and while loops.",
        ],
        code: `# For loop with range
for i in range(5):
    print(i)          # 0, 1, 2, 3, 4

for i in range(2, 10, 2):
    print(i)          # 2, 4, 6, 8 (start, stop, step)

# For loop over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# For loop with enumerate
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# While loop
count = 0
while count < 5:
    print(count)
    count += 1

# Break and continue
for i in range(10):
    if i == 3:
        continue    # skip 3
    if i == 7:
        break       # stop at 7
    print(i)

# Nested loops
for i in range(3):
    for j in range(3):
        print(f"({i},{j})", end=" ")
    print()`,
      },
      {
        heading: "10. Functions",
        content: [
          "Functions are reusable blocks of code. They make code organized and DRY (Don't Repeat Yourself).",
        ],
        code: `# Basic function
def greet(name):
    return f"Hello, {name}!"

print(greet("Amit"))   # Hello, Amit!

# Function with default parameters
def power(base, exponent=2):
    return base ** exponent

print(power(5))        # 25 (5^2)
print(power(2, 3))     # 8  (2^3)

# Function with multiple returns
def min_max(numbers):
    return min(numbers), max(numbers)

smallest, largest = min_max([3, 1, 4, 1, 5, 9])
print(smallest, largest)   # 1 9

# Lambda functions (anonymous, one-line)
square = lambda x: x ** 2
print(square(5))       # 25

# Lambda with map
nums = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, nums))
# [1, 4, 9, 16, 25]

# Lambda with filter
evens = list(filter(lambda x: x % 2 == 0, nums))
# [2, 4]

# *args and **kwargs
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4, 5))   # 15

def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Amit", age=25, city="Mumbai")`,
      },
      {
        heading: "11. File Handling",
        content: [
          "Reading and writing files is essential for data analysis.",
        ],
        code: `# Writing to a file
with open("data.txt", "w") as f:
    f.write("Hello, World!\\n")
    f.write("Second line\\n")

# Reading a file
with open("data.txt", "r") as f:
    content = f.read()
    print(content)

# Reading line by line
with open("data.txt", "r") as f:
    for line in f:
        print(line.strip())

# Appending to a file
with open("data.txt", "a") as f:
    f.write("Third line\\n")

# Working with CSV files
import csv

# Write CSV
with open("data.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Name", "Age", "City"])
    writer.writerow(["Amit", 25, "Mumbai"])
    writer.writerow(["Priya", 30, "Delhi"])

# Read CSV
with open("data.csv", "r") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)

# Working with JSON
import json

data = {"name": "Amit", "skills": ["Python", "SQL", "Excel"]}

# Write JSON
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

# Read JSON
with open("data.json", "r") as f:
    loaded = json.load(f)
    print(loaded["name"])   # Amit`,
      },
      {
        heading: "12. Error Handling",
        content: [
          "Handle errors gracefully using try/except blocks.",
        ],
        code: `try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"Result: {result}")
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"An error occurred: {e}")
else:
    print("No errors occurred!")
finally:
    print("This always runs!")`,
      },
      {
        heading: "13. Classes and Objects",
        content: [
          "Object-oriented programming organizes code into classes (blueprints) and objects (instances).",
        ],
        code: `class Student:
    # Constructor
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade

    # Method
    def introduce(self):
        return f"Hi, I'm {self.name}, age {self.age}, grade {self.grade}"

    # Method with logic
    def is_passing(self):
        return self.grade >= 60

# Creating objects
student1 = Student("Amit", 20, 85)
student2 = Student("Priya", 22, 55)

print(student1.introduce())      # Hi, I'm Amit, age 20, grade 85
print(student1.is_passing())     # True
print(student2.is_passing())     # False`,
      },
      {
        heading: "14. Modules and Imports",
        content: [
          "Modules are Python files that can be imported into other files.",
        ],
        code: `# Importing standard library modules
import math
print(math.pi)           # 3.141592653589793
print(math.sqrt(16))     # 4.0
print(math.ceil(3.2))    # 4

import random
print(random.randint(1, 100))   # random integer 1-100
print(random.choice(["a", "b", "c"]))  # random element

import datetime
now = datetime.datetime.now()
print(now.strftime("%Y-%m-%d %H:%M:%S"))

# Import specific names
from math import sqrt, pi
print(sqrt(25))    # 5.0
print(pi)          # 3.14159...

# Import with alias
import numpy as np
import pandas as pd`,
      },
      {
        heading: "15. Virtual Environments",
        content: [
          "Virtual environments isolate project dependencies. Always use them for data projects.",
        ],
        code: `# Create a virtual environment
python -m venv myenv

# Activate (Windows)
myenv\\Scripts\\activate

# Activate (Mac/Linux)
source myenv/bin/activate

# Install packages
pip install pandas numpy matplotlib

# Save dependencies
pip freeze > requirements.txt

# Install from requirements file
pip install -r requirements.txt

# Deactivate
deactivate`,
      },
    ],
  },

  {
    id: "sql-tutorial",
    title: "SQL Tutorial — Complete Guide",
    category: "Databases",
    icon: "Database",
    description: "Master SQL from basic SELECT to advanced window functions — every concept explained with examples.",
    level: "Beginner",
    estimatedTime: "55 min read",
    sections: [
      {
        heading: "What is SQL?",
        content: [
          "SQL (Structured Query Language) is the standard language for working with relational databases. As a Data Analyst, SQL is one of your most important tools — you will use it daily to extract and analyze data.",
        ],
      },
      {
        heading: "1. Database Basics",
        content: [
          "A relational database stores data in tables (rows and columns). Each table has a name, and each column has a data type.",
        ],
        code: `-- Create a table
CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    department TEXT,
    salary REAL,
    hire_date DATE,
    is_active BOOLEAN DEFAULT TRUE
);

-- Insert data
INSERT INTO employees (id, name, department, salary, hire_date)
VALUES (1, 'Amit', 'Sales', 50000, '2023-01-15');

INSERT INTO employees VALUES
    (2, 'Priya', 'Engineering', 75000, '2022-06-01', TRUE),
    (3, 'Raj', 'Sales', 55000, '2023-03-20', TRUE),
    (4, 'Sneha', 'Marketing', 60000, '2021-11-10', FALSE);

-- Update data
UPDATE employees SET salary = 52000 WHERE id = 1;

-- Delete data
DELETE FROM employees WHERE id = 4;`,
      },
      {
        heading: "2. SELECT — The Foundation",
        content: [
          "SELECT retrieves data from a database. This is the most common SQL command for analysts.",
        ],
        code: `-- Select all columns
SELECT * FROM employees;

-- Select specific columns
SELECT name, salary FROM employees;

-- Add a calculated column
SELECT name, salary, salary * 1.1 AS salary_with_bonus
FROM employees;

-- Select distinct values
SELECT DISTINCT department FROM employees;

-- Limit results
SELECT * FROM employees LIMIT 10;`,
      },
      {
        heading: "3. WHERE — Filtering",
        content: [
          "WHERE filters rows based on conditions.",
        ],
        code: `-- Basic comparison
SELECT * FROM employees WHERE salary > 50000;
SELECT * FROM employees WHERE department = 'Sales';
SELECT * FROM employees WHERE salary >= 50000 AND salary <= 70000;
SELECT * FROM employees WHERE department = 'Sales' OR department = 'Engineering';

-- BETWEEN
SELECT * FROM employees WHERE salary BETWEEN 50000 AND 70000;

-- IN
SELECT * FROM employees WHERE department IN ('Sales', 'Engineering', 'Marketing');

-- LIKE (pattern matching)
SELECT * FROM employees WHERE name LIKE 'A%';     -- starts with A
SELECT * FROM employees WHERE name LIKE '%a%';    -- contains a
SELECT * FROM employees WHERE name LIKE '_mit';   -- _ = single char

-- IS NULL / IS NOT NULL
SELECT * FROM employees WHERE department IS NULL;
SELECT * FROM employees WHERE department IS NOT NULL;

-- NOT
SELECT * FROM employees WHERE NOT department = 'Sales';`,
      },
      {
        heading: "4. ORDER BY — Sorting",
        content: [
          "ORDER BY sorts results by one or more columns.",
        ],
        code: `-- Ascending (default)
SELECT * FROM employees ORDER BY salary;

-- Descending
SELECT * FROM employees ORDER BY salary DESC;

-- Multiple columns
SELECT * FROM employees ORDER BY department ASC, salary DESC;

-- By column position
SELECT name, salary FROM employees ORDER BY 2 DESC;`,
      },
      {
        heading: "5. Aggregate Functions",
        content: [
          "Aggregate functions perform calculations on sets of values and return a single result.",
        ],
        code: `-- Count rows
SELECT COUNT(*) FROM employees;
SELECT COUNT(department) FROM employees;     -- counts non-null
SELECT COUNT(DISTINCT department) FROM employees;

-- Sum, average, min, max
SELECT SUM(salary) FROM employees;
SELECT AVG(salary) FROM employees;
SELECT MIN(salary) FROM employees;
SELECT MAX(salary) FROM employees;

-- Combined with WHERE
SELECT AVG(salary) FROM employees WHERE department = 'Sales';

-- Multiple aggregates
SELECT
    COUNT(*) AS total_employees,
    AVG(salary) AS avg_salary,
    MIN(salary) AS min_salary,
    MAX(salary) AS max_salary
FROM employees;`,
      },
      {
        heading: "6. GROUP BY — Grouping Data",
        content: [
          "GROUP BY groups rows that have the same values into summary rows. It is used with aggregate functions.",
        ],
        code: `-- Average salary by department
SELECT department, AVG(salary) as avg_salary
FROM employees
GROUP BY department;

-- Count employees by department
SELECT department, COUNT(*) as employee_count
FROM employees
GROUP BY department;

-- Multiple aggregates per group
SELECT
    department,
    COUNT(*) as count,
    AVG(salary) as avg_salary,
    MAX(salary) as max_salary
FROM employees
GROUP BY department;

-- GROUP BY with WHERE (WHERE filters before grouping)
SELECT department, AVG(salary) as avg_salary
FROM employees
WHERE is_active = TRUE
GROUP BY department;

-- HAVING (filters after grouping)
SELECT department, COUNT(*) as count
FROM employees
GROUP BY department
HAVING COUNT(*) > 2;`,
      },
      {
        heading: "7. JOINs — Combining Tables",
        content: [
          "JOINs combine data from two or more tables based on a related column.",
        ],
        code: `-- Example tables:
-- employees (id, name, department_id, salary)
-- departments (id, department_name)

-- INNER JOIN (only matching rows)
SELECT e.name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.id;

-- LEFT JOIN (all from left, matching from right)
SELECT e.name, d.department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id;
-- Employees without departments will show NULL

-- RIGHT JOIN (all from right, matching from left)
SELECT e.name, d.department_name
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.id;

-- FULL OUTER JOIN (all rows from both tables)
SELECT e.name, d.department_name
FROM employees e
FULL OUTER JOIN departments d ON e.department_id = d.id;

-- Self JOIN (join table to itself)
SELECT a.name as employee, b.name as manager
FROM employees a
JOIN employees b ON a.manager_id = b.id;

-- Multiple JOINs
SELECT e.name, d.department_name, p.project_name
FROM employees e
JOIN departments d ON e.department_id = d.id
JOIN projects p ON e.id = p.employee_id;`,
      },
      {
        heading: "8. Subqueries",
        content: [
          "A subquery is a query inside another query. They are powerful for complex analysis.",
        ],
        code: `-- Subquery in WHERE
SELECT name, salary FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
-- Find employees above average salary

-- Subquery in SELECT
SELECT
    name,
    salary,
    (SELECT AVG(salary) FROM employees) as company_avg,
    salary - (SELECT AVG(salary) FROM employees) as diff_from_avg
FROM employees;

-- Subquery in FROM (derived table)
SELECT dept_avg.department, dept_avg.avg_salary
FROM (
    SELECT department, AVG(salary) as avg_salary
    FROM employees
    GROUP BY department
) dept_avg
WHERE dept_avg.avg_salary > 55000;

-- Correlated subquery (references outer query)
SELECT name, salary FROM employees e
WHERE salary > (
    SELECT AVG(salary) FROM employees
    WHERE department = e.department
);
-- Employees earning more than their department average

-- EXISTS
SELECT name FROM employees e
WHERE EXISTS (
    SELECT 1 FROM projects p WHERE p.employee_id = e.id
);
-- Employees who have projects`,
      },
      {
        heading: "9. CASE Expressions",
        content: [
          "CASE is SQL's version of if/else — it creates conditional logic.",
        ],
        code: `-- Simple CASE
SELECT name, salary,
    CASE
        WHEN salary >= 70000 THEN 'High'
        WHEN salary >= 50000 THEN 'Medium'
        ELSE 'Low'
    END AS salary_band
FROM employees;

-- CASE in aggregate
SELECT
    SUM(CASE WHEN department = 'Sales' THEN 1 ELSE 0 END) as sales_count,
    SUM(CASE WHEN department = 'Engineering' THEN 1 ELSE 0 END) as eng_count,
    SUM(CASE WHEN department = 'Marketing' THEN 1 ELSE 0 END) as mkt_count
FROM employees;`,
      },
      {
        heading: "10. String Functions",
        content: [
          "SQL provides functions for text manipulation.",
        ],
        code: `-- Concatenation
SELECT first_name || ' ' || last_name AS full_name FROM users;
-- Or (MySQL): SELECT CONCAT(first_name, ' ', last_name) FROM users;

-- Upper/Lower
SELECT UPPER(name) FROM employees;
SELECT LOWER(name) FROM employees;

-- Length
SELECT name, LENGTH(name) FROM employees;

-- Substring
SELECT SUBSTRING(name, 1, 3) FROM employees;   -- first 3 chars
-- Or: SELECT SUBSTR(name, 1, 3) FROM employees;

-- Replace
SELECT REPLACE(name, 'Amit', 'A.') FROM employees;

-- Trim
SELECT TRIM(name) FROM employees;
SELECT LTRIM(name), RTRIM(name) FROM employees;`,
      },
      {
        heading: "11. Date Functions",
        content: [
          "Date functions are essential for time-based analysis.",
        ],
        code: `-- Current date/time
SELECT CURRENT_DATE;
SELECT CURRENT_TIMESTAMP;
SELECT NOW();

-- Extract parts
SELECT EXTRACT(YEAR FROM hire_date) FROM employees;
SELECT EXTRACT(MONTH FROM hire_date) FROM employees;
SELECT EXTRACT(DAY FROM hire_date) FROM employees;

-- Date arithmetic
SELECT hire_date, CURRENT_DATE - hire_date AS days_employed
FROM employees;

-- Date formatting
SELECT TO_CHAR(hire_date, 'YYYY-MM-DD') FROM employees;

-- Age calculation
SELECT name, AGE(CURRENT_DATE, hire_date) FROM employees;`,
      },
      {
        heading: "12. Window Functions",
        content: [
          "Window functions perform calculations across rows related to the current row. They are advanced but incredibly powerful for analytics.",
        ],
        code: `-- ROW_NUMBER: unique sequential number
SELECT
    name, department, salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) as rank
FROM employees;

-- ROW_NUMBER with PARTITION BY (rank within group)
SELECT
    name, department, salary,
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank
FROM employees;

-- RANK and DENSE_RANK
SELECT
    name, salary,
    RANK() OVER (ORDER BY salary DESC) as rank,
    DENSE_RANK() OVER (ORDER BY salary DESC) as dense_rank
FROM employees;
-- RANK: ties get same rank, next rank skips
-- DENSE_RANK: ties get same rank, no skipping

-- Running total
SELECT
    name, salary,
    SUM(salary) OVER (ORDER BY hire_date) as running_total
FROM employees;

-- Moving average (3-row window)
SELECT
    name, salary,
    AVG(salary) OVER (ORDER BY hire_date
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as moving_avg
FROM employees;

-- LAG and LEAD (access other rows)
SELECT
    name, salary,
    LAG(salary, 1) OVER (ORDER BY hire_date) as prev_salary,
    LEAD(salary, 1) OVER (ORDER BY hire_date) as next_salary
FROM employees;

-- FIRST_VALUE and LAST_VALUE
SELECT
    name, department, salary,
    FIRST_VALUE(name) OVER (PARTITION BY department ORDER BY salary DESC) as top_earner
FROM employees;`,
      },
      {
        heading: "13. Common Table Expressions (CTEs)",
        content: [
          "CTEs create temporary result sets that make complex queries readable.",
        ],
        code: `-- Basic CTE
WITH high_earners AS (
    SELECT * FROM employees WHERE salary > 60000
)
SELECT department, COUNT(*) as count
FROM high_earners
GROUP BY department;

-- Multiple CTEs
WITH dept_stats AS (
    SELECT department, AVG(salary) as avg_salary
    FROM employees
    GROUP BY department
),
company_avg AS (
    SELECT AVG(salary) as overall_avg FROM employees
)
SELECT
    d.department,
    d.avg_salary,
    c.overall_avg,
    d.avg_salary - c.overall_avg as diff
FROM dept_stats d
CROSS JOIN company_avg c;

-- Recursive CTE (hierarchical data)
WITH RECURSIVE org_chart AS (
    SELECT id, name, manager_id, 1 as level
    FROM employees WHERE manager_id IS NULL
    UNION ALL
    SELECT e.id, e.name, e.manager_id, oc.level + 1
    FROM employees e
    JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT * FROM org_chart;`,
      },
      {
        heading: "14. Views",
        content: [
          "Views are saved queries that act like virtual tables.",
        ],
        code: `-- Create a view
CREATE VIEW active_employees AS
SELECT name, department, salary
FROM employees
WHERE is_active = TRUE;

-- Use the view
SELECT * FROM active_employees;
SELECT * FROM active_employees WHERE salary > 50000;

-- Drop a view
DROP VIEW active_employees;`,
      },
    ],
  },

  {
    id: "web-scraping-tutorial",
    title: "Web Scraping Tutorial — Complete Guide",
    category: "Data Collection",
    icon: "Globe",
    description: "Learn to extract data from websites using Python — Requests, BeautifulSoup, Selenium, and Scrapy from basics to advanced.",
    level: "Intermediate",
    estimatedTime: "50 min read",
    sections: [
      {
        heading: "What is Web Scraping?",
        content: [
          "Web scraping is the process of automatically extracting data from websites. As a Data Analyst, you often need data that isn't available in a neat CSV or database — web scraping lets you collect it.",
          "Common use cases: collecting product prices, scraping news articles, gathering job postings, extracting contact information, monitoring competitor data.",
        ],
      },
      {
        heading: "Legal and Ethical Considerations",
        content: [
          "Before scraping, always consider:",
        ],
        list: [
          "Check the website's robots.txt file (e.g., example.com/robots.txt) — it tells you what you can scrape",
          "Read the Terms of Service — some sites prohibit scraping",
          "Don't overload the server — add delays between requests",
          "Only scrape publicly available data",
          "Respect copyright and don't redistribute scraped content",
          "Consider using official APIs instead when available",
        ],
      },
      {
        heading: "1. Installing Required Libraries",
        content: [
          "Install the essential web scraping libraries:",
        ],
        code: `pip install requests beautifulsoup4 selenium scrapy pandas
pip install webdriver-manager`,
      },
      {
        heading: "2. Understanding HTML Structure",
        content: [
          "Web pages are written in HTML. To scrape, you need to understand HTML structure.",
          "Key HTML elements for scraping:",
        ],
        code: `<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Main Heading</h1>
    <div class="product-list">
      <p class="item">Product 1</p>
      <p class="item">Product 2</p>
    </div>
    <a href="https://example.com" id="link1">Link</a>
    <table>
      <tr><th>Name</th><th>Price</th></tr>
      <tr><td>Item 1</td><td>$10</td></tr>
    </table>
  </body>
</html>`,
        list: [
          "Tags: <p>, <div>, <a>, <table>, <h1>, <span>, <li>",
          "Attributes: class, id, href, src, style",
          "class — used for styling, multiple elements can share a class",
          "id — unique identifier for a single element",
          "href — link URL in <a> tags",
        ],
      },
      {
        heading: "3. Using Requests",
        content: [
          "The requests library fetches web page content (HTML).",
        ],
        code: `import requests

# Fetch a web page
url = "https://example.com"
response = requests.get(url)

# Check if successful
print(response.status_code)   # 200 = success
print(response.ok)             # True if status < 400

# Get HTML content
html = response.text
print(html[:500])             # first 500 characters

# Add headers (some sites require them)
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
}
response = requests.get(url, headers=headers)

# Handle errors
try:
    response = requests.get(url, timeout=10)
    response.raise_for_status()
except requests.exceptions.RequestException as e:
    print(f"Error: {e}")`,
      },
      {
        heading: "4. BeautifulSoup — Parsing HTML",
        content: [
          "BeautifulSoup parses HTML and makes it easy to navigate and extract data.",
        ],
        code: `from bs4 import BeautifulSoup
import requests

# Fetch and parse
url = "https://example.com"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

# Find elements by tag
title = soup.find("title").text
print(title)

all_paragraphs = soup.find_all("p")
for p in all_paragraphs:
    print(p.text)

# Find by class
items = soup.find_all("p", class_="item")
for item in items:
    print(item.text)

# Find by id
link = soup.find(id="link1")
print(link.text)
print(link["href"])    # get attribute

# Find using CSS selectors
products = soup.select("div.product-list p.item")
for product in products:
    print(product.text)

# Navigate the tree
div = soup.find("div", class_="product-list")
children = div.find_all("p")
parent = div.parent
next_sibling = div.next_sibling`,
      },
      {
        heading: "5. Scraping a Table",
        content: [
          "Tables are common on websites. Here is how to scrape them.",
        ],
        code: `from bs4 import BeautifulSoup
import requests
import pandas as pd

url = "https://example.com/data-table"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

# Find the table
table = soup.find("table")

# Extract headers
headers = []
for th in table.find_all("th"):
    headers.append(th.text.strip())

# Extract rows
rows = []
for tr in table.find_all("tr")[1:]:    # skip header row
    cells = [td.text.strip() for td in tr.find_all("td")]
    rows.append(cells)

# Create DataFrame
df = pd.DataFrame(rows, columns=headers)
print(df.head())

# Save to CSV
df.to_csv("scraped_data.csv", index=False)`,
      },
      {
        heading: "6. Scraping Multiple Pages (Pagination)",
        content: [
          "Most websites spread data across multiple pages. Here is how to scrape all pages.",
        ],
        code: `import requests
from bs4 import BeautifulSoup
import time

base_url = "https://example.com/products?page={}"
all_products = []

for page_num in range(1, 11):    # scrape 10 pages
    url = base_url.format(page_num)
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    products = soup.find_all("div", class_="product")
    for product in products:
        name = product.find("h3").text.strip()
        price = product.find("span", class_="price").text.strip()
        all_products.append({"name": name, "price": price})

    print(f"Scraped page {page_num}: {len(products)} items")

    # Be polite — add delay
    time.sleep(2)

print(f"Total products scraped: {len(all_products)}")`,
      },
      {
        heading: "7. Selenium — Scraping Dynamic Websites",
        content: [
          "Some websites use JavaScript to load content dynamically. Requests + BeautifulSoup cannot see this content. Selenium controls a real browser and can interact with JavaScript.",
        ],
        code: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import time

# Set up browser
driver = webdriver.Chrome(ChromeDriverManager().install())

# Navigate to page
driver.get("https://example.com")

# Wait for element to load
wait = WebDriverWait(driver, 10)
element = wait.until(EC.presence_of_element_located((By.CLASS_NAME, "product")))

# Find elements
products = driver.find_elements(By.CLASS_NAME, "product")
for product in products:
    name = product.find_element(By.TAG_NAME, "h3").text
    price = product.find_element(By.CLASS_NAME, "price").text
    print(f"{name}: {price}")

# Click a button
button = driver.find_element(By.ID, "load-more")
button.click()
time.sleep(2)    # wait for new content

# Scroll down
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
time.sleep(2)

# Close browser
driver.quit()`,
      },
      {
        heading: "8. Handling Login-Required Pages",
        content: [
          "Some data requires logging in. Selenium can fill in forms and submit them.",
        ],
        code: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()
driver.get("https://example.com/login")

# Fill in login form
username = driver.find_element(By.ID, "username")
password = driver.find_element(By.ID, "password")
username.send_keys("your_username")
password.send_keys("your_password")

# Submit
password.send_keys(Keys.RETURN)
time.sleep(3)    # wait for redirect

# Now you can scrape the protected page
data = driver.find_elements(By.CLASS_NAME, "data-row")
for row in data:
    print(row.text)

driver.quit()`,
      },
      {
        heading: "9. Scrapy — Large-Scale Scraping",
        content: [
          "Scrapy is a powerful framework for large-scale web scraping. It handles concurrency, pipelines, and data export automatically.",
        ],
        code: `# Create a Scrapy project (in terminal):
# scrapy startproject myscraper
# cd myscraper
# scrapy genspider example example.com

# In myscraper/spiders/example_spider.py:
import scrapy

class ExampleSpider(scrapy.Spider):
    name = "example"
    start_urls = ["https://example.com/products"]

    def parse(self, response):
        for product in response.css("div.product"):
            yield {
                "name": product.css("h3::text").get(),
                "price": product.css("span.price::text").get(),
                "link": product.css("a::attr(href)").get(),
            }

        # Follow pagination
        next_page = response.css("a.next-page::attr(href)").get()
        if next_page:
            yield response.follow(next_page, self.parse)

# Run the spider (in terminal):
# scrapy crawl example -o products.json`,
      },
      {
        heading: "10. Best Practices",
        content: [
          "Follow these practices for reliable and respectful scraping:",
        ],
        list: [
          "Always add delays between requests (time.sleep) to avoid overloading servers",
          "Use realistic User-Agent headers",
          "Handle errors gracefully — websites change, and your scraper should not crash",
          "Store data incrementally — don't wait until the end to save",
          "Cache responses during development to avoid repeated requests",
          "Use proxies for large-scale scraping to avoid IP bans",
          "Check robots.txt before scraping",
          "Monitor your scraper — websites change structure over time",
        ],
      },
    ],
  },

  {
    id: "pandas-tutorial",
    title: "Pandas Tutorial — Complete Guide",
    category: "Python",
    icon: "Table",
    description: "Master Pandas from Series and DataFrames to advanced merging, grouping, and time series analysis.",
    level: "Intermediate",
    estimatedTime: "55 min read",
    sections: [
      {
        heading: "What is Pandas?",
        content: [
          "Pandas is the most important Python library for data analysis. It provides two main data structures — Series (1D) and DataFrame (2D) — that make working with tabular data easy and intuitive.",
          "If you learn only one Python library for data analysis, make it Pandas.",
        ],
      },
      {
        heading: "1. Installation and Import",
        content: [
          "Install Pandas and import it. The convention is to import as pd.",
        ],
        code: `pip install pandas

import pandas as pd
import numpy as np`,
      },
      {
        heading: "2. Series — One-Dimensional Data",
        content: [
          "A Series is like a column in a spreadsheet — a one-dimensional array with labels (index).",
        ],
        code: `# Create a Series
s = pd.Series([10, 20, 30, 40, 50])
print(s)
# 0    10
# 1    20
# 2    30
# 3    40
# 4    50
# dtype: int64

# With custom index
s = pd.Series([10, 20, 30], index=["a", "b", "c"])
print(s["a"])    # 10

# From dictionary
s = pd.Series({"apple": 5, "banana": 3, "cherry": 8})

# Basic operations
print(s.values)       # array of values
print(s.index)        # index labels
print(s.dtype)        # data type
print(s.shape)        # (3,)

# Series operations (vectorized)
s1 = pd.Series([1, 2, 3, 4])
s2 = pd.Series([10, 20, 30, 40])
print(s1 + s2)        # [11, 22, 33, 44]
print(s1 * 2)         # [2, 4, 6, 8]
print(s1.sum())       # 10
print(s1.mean())      # 2.5
print(s1.max())       # 4
print(s1.describe())  # summary statistics`,
      },
      {
        heading: "3. DataFrame — Two-Dimensional Data",
        content: [
          "A DataFrame is a 2D table with rows and columns — like a spreadsheet or SQL table.",
        ],
        code: `# Create from dictionary
df = pd.DataFrame({
    "name": ["Amit", "Priya", "Raj", "Sneha"],
    "age": [25, 30, 28, 35],
    "city": ["Mumbai", "Delhi", "Bangalore", "Pune"],
    "salary": [50000, 75000, 65000, 80000]
})

print(df)

# Create from list of lists
df = pd.DataFrame([
    ["Amit", 25, "Mumbai"],
    ["Priya", 30, "Delhi"]
], columns=["name", "age", "city"])

# Load from CSV
df = pd.read_csv("data.csv")

# Load from Excel
df = pd.read_excel("data.xlsx")

# Load from SQL
# import sqlite3
# conn = sqlite3.connect("database.db")
# df = pd.read_sql("SELECT * FROM employees", conn)

# Save data
df.to_csv("output.csv", index=False)
df.to_excel("output.xlsx", index=False)
df.to_json("output.json")`,
      },
      {
        heading: "4. Viewing and Inspecting Data",
        content: [
          "Pandas provides many ways to inspect your data.",
        ],
        code: `# View first/last rows
df.head()         # first 5 rows
df.head(10)       # first 10 rows
df.tail()         # last 5 rows
df.tail(3)        # last 3 rows

# Overview
df.info()         # data types, non-null counts, memory usage
df.describe()     # statistical summary of numeric columns
df.shape          # (rows, columns)
df.size           # total elements
df.columns        # column names
df.index          # row labels
df.dtypes         # data types of each column

# Sample random rows
df.sample(5)      # 5 random rows

# Unique values
df["city"].unique()           # unique values
df["city"].nunique()          # count of unique values
df["city"].value_counts()     # count of each value

# Check for missing values
df.isnull().sum()             # missing count per column
df.isnull().sum().sum()       # total missing`,
      },
      {
        heading: "5. Selecting and Filtering Data",
        content: [
          "Selecting specific rows and columns is the most common Pandas operation.",
        ],
        code: `# Select columns
df["name"]               # single column (returns Series)
df[["name", "age"]]      # multiple columns (returns DataFrame)

# Select rows by label (.loc)
df.loc[0]                # row with index 0
df.loc[0:2]              # rows 0 to 2 (inclusive!)
df.loc[0:2, "name"]      # rows 0-2, only name column
df.loc[0:2, ["name", "age"]]  # rows 0-2, name and age columns

# Select rows by position (.iloc)
df.iloc[0]               # first row
df.iloc[0:3]             # first 3 rows (exclusive, like Python)
df.iloc[0:3, 0:2]        # first 3 rows, first 2 columns

# Filter rows with conditions
df[df["age"] > 25]
df[df["city"] == "Mumbai"]
df[(df["age"] > 25) & (df["salary"] > 60000)]   # AND
df[(df["city"] == "Mumbai") | (df["city"] == "Delhi")]  # OR
df[df["city"].isin(["Mumbai", "Delhi", "Pune"])]
df[df["name"].str.startswith("A")]
df[df["age"].between(25, 35)]

# Filter with query() method
df.query("age > 25 and salary > 60000")`,
      },
      {
        heading: "6. Adding, Modifying, and Removing Data",
        content: [
          "Manipulating the structure of your DataFrame.",
        ],
        code: `# Add a new column
df["bonus"] = df["salary"] * 0.1
df["total_comp"] = df["salary"] + df["bonus"]
df["category"] = "Employee"    # constant value

# Add column with condition
df["level"] = df["salary"].apply(
    lambda x: "Senior" if x > 70000 else "Junior"
)

# Add a row
new_row = pd.DataFrame([{"name": "Karan", "age": 27, "city": "Chennai", "salary": 70000}])
df = pd.concat([df, new_row], ignore_index=True)

# Modify values
df.loc[df["name"] == "Amit", "salary"] = 55000   # update specific

# Rename columns
df.rename(columns={"name": "full_name", "age": "years"}, inplace=True)

# Drop columns and rows
df.drop("bonus", axis=1, inplace=True)           # drop column
df.drop(columns=["bonus", "level"], inplace=True) # drop multiple columns
df.drop(0, axis=0, inplace=True)                  # drop row by index

# Replace values
df["city"].replace({"Mumbai": "Bombay"}, inplace=True)
df.replace({"N/A": np.nan}, inplace=True)`,
      },
      {
        heading: "7. Handling Missing Data",
        content: [
          "Real-world data has missing values. Pandas makes it easy to handle them.",
        ],
        code: `# Check for missing values
df.isnull().sum()         # count per column
df.isnull().sum().sum()   # total
df.notnull().sum()        # non-null count per column

# Drop missing values
df.dropna()               # drop rows with any missing values
df.dropna(how="all")      # drop rows where ALL values are missing
df.dropna(subset=["salary"])  # drop rows where salary is missing
df.dropna(axis=1)         # drop columns with any missing values

# Fill missing values
df.fillna(0)                              # fill all with 0
df["salary"].fillna(df["salary"].mean())  # fill with mean
df["salary"].fillna(df["salary"].median()) # fill with median
df["city"].fillna("Unknown")              # fill categorical with default
df.fillna(method="ffill")                 # forward fill (use previous value)
df.fillna(method="bfill")                 # backward fill (use next value)

# Interpolate (estimate missing values)
df["salary"].interpolate(method="linear")`,
      },
      {
        heading: "8. GroupBy — Grouping and Aggregation",
        content: [
          "GroupBy is Pandas' most powerful feature for data analysis — it splits data into groups, applies a function, and combines results.",
        ],
        code: `# Group by one column
df.groupby("city")["salary"].mean()
# Average salary by city

# Group by multiple columns
df.groupby(["city", "level"])["salary"].mean()

# Multiple aggregations
df.groupby("city")["salary"].agg(["mean", "median", "min", "max", "count"])

# Different aggregations per column
df.groupby("city").agg({
    "salary": ["mean", "max"],
    "age": "mean",
    "name": "count"
})

# Named aggregations (cleaner output)
df.groupby("city").agg(
    avg_salary=("salary", "mean"),
    max_salary=("salary", "max"),
    employee_count=("name", "count")
)

# Custom aggregation function
df.groupby("city")["salary"].agg(
    lambda x: x.max() - x.min()   # salary range per city
)

# Iterate over groups
for city, group in df.groupby("city"):
    print(f"{city}: {len(group)} employees, avg salary {group['salary'].mean()}")`,
      },
      {
        heading: "9. Merging and Joining DataFrames",
        content: [
          "Combining multiple DataFrames is essential when data comes from different sources.",
        ],
        code: `# Two DataFrames to merge
employees = pd.DataFrame({
    "emp_id": [1, 2, 3, 4],
    "name": ["Amit", "Priya", "Raj", "Sneha"],
    "dept_id": [10, 20, 10, 30]
})

departments = pd.DataFrame({
    "dept_id": [10, 20, 30, 40],
    "dept_name": ["Sales", "Engineering", "Marketing", "HR"]
})

# Merge (like SQL JOIN)
pd.merge(employees, departments, on="dept_id", how="inner")  # INNER JOIN
pd.merge(employees, departments, on="dept_id", how="left")   # LEFT JOIN
pd.merge(employees, departments, on="dept_id", how="right")  # RIGHT JOIN
pd.merge(employees, departments, on="dept_id", how="outer")  # FULL OUTER JOIN

# Different column names
pd.merge(employees, departments,
         left_on="dept_id", right_on="dept_id", how="left")

# Concatenate (stack DataFrames)
pd.concat([df1, df2], axis=0)    # stack vertically (add rows)
pd.concat([df1, df2], axis=1)    # stack horizontally (add columns)

# Join on index
df1.join(df2, how="left")`,
      },
      {
        heading: "10. Sorting and Ranking",
        content: [
          "Sorting and ranking arrange data for analysis and reporting.",
        ],
        code: `# Sort by one column
df.sort_values("salary")
df.sort_values("salary", ascending=False)

# Sort by multiple columns
df.sort_values(["city", "salary"], ascending=[True, False])

# Sort by index
df.sort_index()

# Rank
df["salary_rank"] = df["salary"].rank(ascending=False)
# method: 'average' (default), 'min', 'max', 'first', 'dense'
df["dense_rank"] = df["salary"].rank(method="dense", ascending=False)`,
      },
      {
        heading: "11. Applying Functions",
        content: [
          "Apply custom functions to your data.",
        ],
        code: `# Apply to a Series (column)
df["salary_after_tax"] = df["salary"].apply(lambda x: x * 0.85)

# Apply to DataFrame (row or column wise)
df[["age", "salary"]].apply(np.sqrt)           # element-wise
df.apply(lambda row: row["salary"] / row["age"], axis=1)  # row-wise

# Map: transform values
df["city"] = df["city"].map({"Mumbai": "MUM", "Delhi": "DEL"})

# Applymap: element-wise on entire DataFrame (deprecated, use map)
df.map(lambda x: str(x).upper() if isinstance(x, str) else x)`,
      },
      {
        heading: "12. Pivot Tables and Crosstabs",
        content: [
          "Pivot tables reshape data for analysis — like Excel pivot tables but in Python.",
        ],
        code: `# Pivot table
pd.pivot_table(df, values="salary", index="city",
               columns="level", aggfunc="mean")

# Multiple aggregations in pivot
pd.pivot_table(df, values="salary", index="city",
               aggfunc=["mean", "sum", "count"])

# Crosstab (count of combinations)
pd.crosstab(df["city"], df["level"])

# Melt (wide to long format)
df_wide = pd.DataFrame({
    "name": ["Amit", "Priya"],
    "Jan": [100, 200],
    "Feb": [150, 250]
})
df_long = df_wide.melt(id_vars="name",
                       var_name="month", value_name="sales")

# Pivot (long to wide)
df_wide_again = df_long.pivot(index="name",
                              columns="month", values="sales")`,
      },
      {
        heading: "13. Time Series with Pandas",
        content: [
          "Pandas has excellent support for time series data.",
        ],
        code: `# Create date range
dates = pd.date_range("2024-01-01", periods=10, freq="D")
# Daily: "D", Monthly: "M", Yearly: "Y", Hourly: "H"

# Create time series DataFrame
ts = pd.DataFrame({
    "date": dates,
    "sales": [100, 120, 90, 150, 200, 180, 160, 210, 190, 220]
})
ts.set_index("date", inplace=True)

# Resample (change frequency)
ts.resample("3D").sum()     # 3-day totals
ts.resample("W").mean()     # weekly average

# Rolling window (moving average)
ts["7_day_avg"] = ts["sales"].rolling(window=3).mean()

# Shift (lag/lead)
ts["prev_day_sales"] = ts["sales"].shift(1)
ts["pct_change"] = ts["sales"].pct_change()

# Date components
ts["day_of_week"] = ts.index.day_name()
ts["month"] = ts.index.month

# Time-based indexing
ts["2024-01-03"]                    # single day
ts["2024-01-03":"2024-01-07"]      # date range`,
      },
    ],
  },

  {
    id: "powerbi-tutorial",
    title: "Power BI Tutorial — Complete Guide",
    category: "Visualization",
    icon: "LayoutDashboard",
    description: "Learn Power BI from connecting data to building interactive dashboards and DAX formulas.",
    level: "Intermediate",
    estimatedTime: "50 min read",
    sections: [
      {
        heading: "What is Power BI?",
        content: [
          "Power BI is Microsoft's business analytics tool for creating interactive dashboards and reports. It connects to hundreds of data sources, transforms data with Power Query, and creates stunning visualizations.",
          "Power BI has three main components:",
        ],
        list: [
          "Power BI Desktop — free desktop app for building reports (Windows only)",
          "Power BI Service — cloud platform for sharing and collaborating",
          "Power BI Mobile — view dashboards on mobile devices",
        ],
      },
      {
        heading: "1. Getting Started with Power BI Desktop",
        content: [
          "Download Power BI Desktop from the Microsoft Store or powerbi.microsoft.com. It is free.",
          "The workflow is:",
        ],
        list: [
          "1. Connect to data (Get Data)",
          "2. Transform data (Power Query Editor)",
          "3. Create data model (relationships)",
          "4. Add calculations (DAX)",
          "5. Create visualizations",
          "6. Format and design the report",
          "7. Publish to Power BI Service",
        ],
      },
      {
        heading: "2. Connecting to Data",
        content: [
          "Power BI can connect to hundreds of data sources.",
          "To connect: Home > Get Data > choose source > select file/table > Load or Transform Data.",
          "Choose 'Transform Data' to open Power Query for cleaning. Choose 'Load' to import directly.",
        ],
        list: [
          "Files: Excel, CSV, XML, JSON, PDF, folder",
          "Databases: SQL Server, PostgreSQL, MySQL, Oracle",
          "Cloud services: Azure, Salesforce, Google Analytics, SharePoint",
          "Web: web pages, REST APIs",
          "Other: Python/R scripts",
        ],
      },
      {
        heading: "3. Power Query Editor in Power BI",
        content: [
          "Power BI's Power Query is the same as in Excel — a visual data transformation tool.",
        ],
        list: [
          "Remove columns: right-click column > Remove",
          "Rename columns: double-click header",
          "Change data types: click the type icon next to column name",
          "Replace values: right-click column > Replace Values",
          "Split columns: by delimiter, by number of characters",
          "Merge queries: Home > Merge Queries (like SQL JOIN)",
          "Append queries: Home > Append Queries (like SQL UNION)",
          "Group by: Transform > Group By (aggregation)",
          "Pivot/Unpivot: Transform > Pivot Column / Unpivot Columns",
          "Conditional column: Add Column > Conditional Column (like IF)",
          "Custom column: Add Column > Custom Column (write Power Query formula)",
        ],
      },
      {
        heading: "4. Data Modeling — Relationships",
        content: [
          "After loading data, create relationships between tables — this is the foundation of Power BI.",
        ],
        list: [
          "Go to Model View (relationship icon on left sidebar)",
          "Drag a field from one table to the matching field in another table",
          "Relationship types:",
          "  — One-to-Many (1:*): most common (e.g., one category to many products)",
          "  — One-to-One (1:1): rare",
          "  — Many-to-Many (*:*): avoid if possible",
          "Cross-filter direction:",
          "  — Single: filter flows one way (from the 'one' side)",
          "  — Both: filter flows both directions (use carefully)",
          "Cardinality is automatically detected — verify it's correct",
        ],
      },
      {
        heading: "5. DAX — Data Analysis Expressions",
        content: [
          "DAX is the formula language of Power BI. It is used to create calculated columns, measures, and calculated tables.",
          "DAX vs Excel formulas: DAX works with tables and columns, not cells. It is more powerful but has a learning curve.",
        ],
      },
      {
        heading: "6. DAX — Basic Measures",
        content: [
          "Measures are calculations that adapt to filter context in your report.",
        ],
        code: `-- Total Sales
Total Sales = SUM(Sales[Amount])

-- Total Quantity
Total Quantity = SUM(Sales[Quantity])

-- Average Price
Average Price = AVERAGE(Sales[Price])

-- Count of Orders
Order Count = COUNTROWS(Sales)

-- Distinct Count of Customers
Customer Count = DISTINCTCOUNT(Sales[CustomerID])

-- Minimum and Maximum
Min Sales = MIN(Sales[Amount])
Max Sales = MAX(Sales[Amount])`,
      },
      {
        heading: "7. DAX — Calculated Columns",
        content: [
          "Calculated columns add new columns to your table using DAX formulas.",
        ],
        code: `-- Profit column
Profit = Sales[Revenue] - Sales[Cost]

-- Profit margin
Profit Margin = DIVIDE(Sales[Profit], Sales[Revenue], 0)

-- Full name
Full Name = Customers[FirstName] & " " & Customers[LastName]

-- Category based on value
Sales Category =
    IF(Sales[Amount] > 1000, "High",
       IF(Sales[Amount] > 500, "Medium", "Low"))

-- Date column
Year = YEAR(Sales[Date])
Month Name = FORMAT(Sales[Date], "MMMM")
Quarter = "Q" & QUARTER(Sales[Date])`,
      },
      {
        heading: "8. DAX — Time Intelligence Functions",
        content: [
          "Time intelligence functions are one of Power BI's biggest strengths — they make period-over-period comparisons easy.",
        ],
        code: `-- Same period last year
Sales Last Year = CALCULATE([Total Sales],
    SAMEPERIODLASTYEAR(Calendar[Date]))

-- Year-to-date
Sales YTD = TOTALYTD([Total Sales], Calendar[Date])

-- Quarter-to-date
Sales QTD = TOTALQTD([Total Sales], Calendar[Date])

-- Month-to-date
Sales MTD = TOTALMTD([Total Sales], Calendar[Date])

-- Year-over-year growth
YoY Growth = DIVIDE(
    [Total Sales] - [Sales Last Year],
    [Sales Last Year],
    0
)

-- Rolling 12 months
Rolling 12M Sales = CALCULATE([Total Sales],
    DATESINPERIOD(Calendar[Date],
        MAX(Calendar[Date]), -12, MONTH))

-- Previous month
Prev Month Sales = CALCULATE([Total Sales],
    DATEADD(Calendar[Date], -1, MONTH))`,
      },
      {
        heading: "9. DAX — Advanced Functions",
        content: [
          "These functions unlock powerful analysis in DAX.",
        ],
        code: `-- CALCULATE (modifies filter context)
Red Products Sales = CALCULATE([Total Sales],
    Products[Color] = "Red")

-- CALCULATE with multiple filters
High Value Red Sales = CALCULATE([Total Sales],
    Products[Color] = "Red",
    Sales[Amount] > 500)

-- FILTER (table function)
Top Customers Sales = CALCULATE([Total Sales],
    FILTER(Customers,
        CALCULATE([Total Sales]) > 10000))

-- ALL (remove filters)
% of Total = DIVIDE([Total Sales],
    CALCULATE([Total Sales], ALL(Sales)))

-- ALLEXCEPT (keep some filters)
% of Category Total = DIVIDE([Total Sales],
    CALCULATE([Total Sales],
    ALLEXCEPT(Sales, Sales[Category])))

-- SWITCH (like CASE/switch)
Sales Tier = SWITCH(
    TRUE(),
    [Total Sales] > 10000, "Platinum",
    [Total Sales] > 5000, "Gold",
    [Total Sales] > 1000, "Silver",
    "Bronze"
)

-- RANKX
Sales Rank = RANKX(
    ALL(Customers),
    [Total Sales], , DESC
)

-- TOPN
Top 5 Customers Sales = CALCULATE([Total Sales],
    TOPN(5, Customers, [Total Sales], DESC))`,
      },
      {
        heading: "10. Creating Visualizations",
        content: [
          "Power BI offers many visualization types. Choose the right one for your data.",
        ],
        table: {
          headers: ["Visualization", "Best For", "Example"],
          rows: [
            ["Bar/Column Chart", "Comparing categories", "Sales by region"],
            ["Line Chart", "Trends over time", "Monthly sales trend"],
            ["Pie/Donut Chart", "Part of whole (few categories)", "Market share"],
            ["Scatter Plot", "Relationship between 2 variables", "Price vs. demand"],
            ["Table", "Detailed data", "Transaction list"],
            ["Matrix", "Multi-dimensional data", "Sales by region and month"],
            ["Card", "Single KPI", "Total revenue"],
            ["Map", "Geographic data", "Sales by country"],
            ["Funnel", "Stages of a process", "Sales pipeline"],
            ["Gauge", "Progress toward target", "Goal completion"],
            ["Treemap", "Hierarchical proportions", "Category/sub-category sales"],
            ["Waterfall", "Running total with increases/decreases", "Profit breakdown"],
          ],
        },
      },
      {
        heading: "11. Interactive Features",
        content: [
          "Power BI visualizations are interactive — they filter each other automatically.",
        ],
        list: [
          "Slicers: add filter panels (Insert > Slicer) for users to filter the report",
          "Cross-filtering: clicking a bar in one chart filters all other charts",
          "Drill-through: right-click a data point to open a detailed page",
          "Tooltips: hover over visual to see detailed information",
          "Bookmarks: save a view state and navigate between bookmarks",
          "Buttons: add navigation buttons to switch between pages or bookmarks",
          "Q&A: natural language questions (type 'show sales by region as bar chart')",
        ],
      },
      {
        heading: "12. Power BI Service — Publishing and Sharing",
        content: [
          "After building your report in Desktop, publish it to the Power BI Service for sharing.",
        ],
        list: [
          "1. Sign in to Power BI Service (app.powerbi.com) — free account available",
          "2. In Desktop: Home > Publish > select workspace",
          "3. In Service: create a dashboard by pinning visuals from your report",
          "4. Set up scheduled refresh to keep data current",
          "5. Share with colleagues (requires Power BI Pro license for sharing)",
          "6. Export to PDF or PowerPoint for presentations",
          "7. Set up alerts on data changes",
        ],
      },
      {
        heading: "13. Power BI Best Practices",
        content: [
          "Following these practices makes your Power BI reports faster and more maintainable:",
        ],
        list: [
          "Use a dedicated calendar/date table for time intelligence",
          "Keep your data model simple — star schema is ideal",
          "Use measures instead of calculated columns when possible (they save memory)",
          "Name measures clearly with a prefix (e.g., 'Sales Total', 'Sales YTD')",
          "Format numbers consistently (currency, thousands separators)",
          "Use consistent color schemes across all visuals",
          "Don't put too many visuals on one page — it slows rendering",
          "Use hierarchy for drill-down (Year > Quarter > Month > Day)",
          "Document your DAX measures so others understand them",
        ],
      },
    ],
  },

  {
    id: "numpy-tutorial",
    title: "NumPy Tutorial — Complete Guide",
    category: "Python",
    icon: "Calculator",
    description: "Master NumPy arrays, operations, broadcasting, and linear algebra from basics to advanced.",
    level: "Intermediate",
    estimatedTime: "45 min read",
    sections: [
      {
        heading: "What is NumPy?",
        content: [
          "NumPy (Numerical Python) is the foundation of scientific computing in Python. It provides fast, efficient n-dimensional arrays and mathematical functions. Pandas, Matplotlib, and most data science libraries are built on top of NumPy.",
        ],
      },
      {
        heading: "1. Installation and Import",
        content: [
          "Install NumPy and import it. The convention is np.",
        ],
        code: `pip install numpy
import numpy as np`,
      },
      {
        heading: "2. Creating Arrays",
        content: [
          "NumPy arrays (ndarrays) are the core data structure — faster and more powerful than Python lists.",
        ],
        code: `# From a list
arr = np.array([1, 2, 3, 4, 5])
print(arr)            # [1 2 3 4 5]
print(type(arr))      # <class 'numpy.ndarray'>
print(arr.dtype)      # int64
print(arr.shape)      # (5,)
print(arr.ndim)       # 1 (number of dimensions)
print(arr.size)       # 5 (total elements)

# 2D array (matrix)
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix.shape)   # (2, 3)
print(matrix.ndim)    # 2

# 3D array
arr3d = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
print(arr3d.shape)    # (2, 2, 2)
print(arr3d.ndim)     # 3

# Built-in array creation
np.zeros(5)                    # [0. 0. 0. 0. 0.]
np.zeros((3, 4))              # 3x4 matrix of zeros
np.ones((2, 3))               # 2x3 matrix of ones
np.full((2, 2), 7)            # 2x2 filled with 7
np.eye(3)                     # 3x3 identity matrix
np.arange(0, 10, 2)           # [0 2 4 6 8] (start, stop, step)
np.linspace(0, 1, 5)          # [0. 0.25 0.5 0.75 1.] (evenly spaced)
np.random.rand(3, 3)          # 3x3 random (0-1)
np.random.randn(3, 3)         # 3x3 random (normal distribution)
np.random.randint(0, 100, 5)  # 5 random integers 0-99
np.random.seed(42)            # reproducible random numbers`,
      },
      {
        heading: "3. Array Data Types",
        content: [
          "NumPy arrays have a single data type for all elements, making them efficient.",
        ],
        code: `# Specify data type
arr = np.array([1, 2, 3], dtype="float64")
print(arr.dtype)      # float64

arr = np.array([1.5, 2.7, 3.9], dtype="int32")
print(arr)            # [1 2 3] (truncated)

# Common types: int8, int16, int32, int64, float32, float64, bool, str

# Convert type
arr = np.array([1.5, 2.7, 3.9])
arr_int = arr.astype(int)
print(arr_int)        # [1 2 3]`,
      },
      {
        heading: "4. Indexing and Slicing",
        content: [
          "Access elements in arrays — similar to Python lists but more powerful.",
        ],
        code: `# 1D array
arr = np.array([10, 20, 30, 40, 50])
print(arr[0])         # 10
print(arr[-1])        # 50
print(arr[1:4])       # [20 30 40]
print(arr[:3])        # [10 20 30]
print(arr[2:])        # [30 40 50]
print(arr[::-1])      # [50 40 30 20 10] (reversed)

# 2D array
mat = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(mat[0, 0])      # 1 (row 0, col 0)
print(mat[1, 2])      # 6 (row 1, col 2)
print(mat[0])         # [1 2 3] (entire row 0)
print(mat[:, 0])      # [1 4 7] (entire column 0)
print(mat[0:2, 1:3])  # [[2 3] [5 6]] (sub-matrix)

# Boolean indexing (powerful!)
arr = np.array([10, 20, 30, 40, 50])
mask = arr > 25
print(arr[mask])      # [30 40 50]

# Direct boolean condition
print(arr[arr > 25])  # [30 40 50]
print(arr[(arr > 15) & (arr < 45)])  # [20 30 40]
print(arr[arr != 30]) # [10 20 40 50]

# Fancy indexing
print(arr[[0, 2, 4]]) # [10 30 50] (specific indices)`,
      },
      {
        heading: "5. Array Operations",
        content: [
          "NumPy supports element-wise operations without loops — this is called vectorization and it is much faster.",
        ],
        code: `# Arithmetic (element-wise)
a = np.array([1, 2, 3, 4])
b = np.array([10, 20, 30, 40])

print(a + b)      # [11 22 33 44]
print(a - b)      # [-9 -18 -27 -36]
print(a * b)      # [10 40 90 160]
print(b / a)      # [10. 10. 10. 10.]
print(a ** 2)     # [1 4 9 16]
print(a % 2)      # [1 0 1 0]

# Scalar operations
print(a + 100)    # [101 102 103 104]
print(a * 2)      # [2 4 6 8]
print(-a)         # [-1 -2 -3 -4]

# Comparison (returns boolean array)
print(a > 2)      # [False False  True  True]
print(a == b)     # [False False False False]

# Mathematical functions
arr = np.array([1, 4, 9, 16, 25])
print(np.sqrt(arr))     # [1. 2. 3. 4. 5.]
print(np.abs([-1, -2])) # [1 2]
print(np.exp(arr))      # e^arr
print(np.log(arr))      # natural log

# Trigonometric
angles = np.array([0, np.pi/2, np.pi])
print(np.sin(angles))   # [0 1 0]
print(np.cos(angles))   # [1 0 -1]

# Rounding
arr = np.array([1.2, 2.5, 3.7, 4.1])
print(np.round(arr))    # [1. 2. 4. 4.]
print(np.floor(arr))    # [1. 2. 3. 4.]
print(np.ceil(arr))     # [2. 3. 4. 5.]`,
      },
      {
        heading: "6. Statistical Operations",
        content: [
          "NumPy provides fast statistical functions for data analysis.",
        ],
        code: `arr = np.array([10, 20, 30, 40, 50])

print(np.sum(arr))         # 150
print(np.mean(arr))        # 30.0
print(np.median(arr))      # 30.0
print(np.std(arr))         # standard deviation
print(np.var(arr))         # variance
print(np.min(arr))         # 10
print(np.max(arr))         # 50
print(np.argmin(arr))      # 0 (index of min)
print(np.argmax(arr))      # 4 (index of max)
print(np.percentile(arr, 50))  # 30.0 (median)

# For 2D arrays (axis parameter)
mat = np.array([[1, 2, 3], [4, 5, 6]])
print(np.sum(mat))              # 21 (all elements)
print(np.sum(mat, axis=0))      # [5 7 9] (column sums)
print(np.sum(mat, axis=1))      # [6 15] (row sums)
print(np.mean(mat, axis=0))     # [2.5 3.5 4.5] (column means)
print(np.max(mat, axis=1))      # [3 6] (row maxes)

# Cumulative
print(np.cumsum(arr))      # [10 30 60 100 150]
print(np.cumprod(arr))     # [10 200 6000 240000 12000000]`,
      },
      {
        heading: "7. Broadcasting",
        content: [
          "Broadcasting is NumPy's way of performing operations on arrays of different shapes without explicitly duplicating data.",
        ],
        code: `# Scalar + array (scalar is 'broadcast' to each element)
arr = np.array([1, 2, 3])
print(arr + 10)         # [11 12 13]

# 1D + 2D (1D is broadcast across rows)
mat = np.array([[1, 2, 3], [4, 5, 6]])
row = np.array([10, 20, 30])
print(mat + row)
# [[11 22 33]
#  [14 25 36]]

# Column broadcast
col = np.array([[10], [20]])    # 2x1 array
print(mat + col)
# [[11 12 13]
#  [24 25 26]]

# Broadcasting rules:
# 1. Compare shapes from right to left
# 2. Dimensions must be equal or one of them must be 1
# 3. If shapes don't match, error

# Example: standardize data (z-score normalization)
data = np.array([10, 20, 30, 40, 50])
standardized = (data - np.mean(data)) / np.std(data)
print(standardized)    # [-1.41 -0.71 0. 0.71 1.41]`,
      },
      {
        heading: "8. Reshaping and Transposing",
        content: [
          "Change the shape of arrays without changing the data.",
        ],
        code: `# Reshape
arr = np.arange(12)             # [0 1 2 ... 11]
print(arr.reshape(3, 4))        # 3x4 matrix
print(arr.reshape(4, 3))        # 4x3 matrix
print(arr.reshape(2, 2, 3))     # 2x2x3 array
print(arr.reshape(-1, 4))       # auto-calculate rows: 3x4 (-1 means 'figure it out')

# Flatten
mat = np.array([[1, 2, 3], [4, 5, 6]])
print(mat.flatten())            # [1 2 3 4 5 6]
print(mat.ravel())              # same but returns a view (more memory efficient)

# Transpose
print(mat.T)                    # [[1 4] [2 5] [3 6]]
print(mat.transpose())          # same

# Swap axes (for 3D+ arrays)
arr3d = np.arange(24).reshape(2, 3, 4)
print(arr3d.swapaxes(0, 2).shape)   # (4, 3, 2)

# Resize (modifies in place, can repeat data)
arr = np.array([1, 2, 3])
arr.resize((2, 3))
print(arr)    # [[1 2 3] [1 2 3]]`,
      },
      {
        heading: "9. Stacking and Splitting",
        content: [
          "Combine and split arrays in various ways.",
        ],
        code: `a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Stack vertically
print(np.vstack([a, b]))
# [[1 2 3]
#  [4 5 6]]

# Stack horizontally
print(np.hstack([a, b]))
# [1 2 3 4 5 6]

# Stack as columns
print(np.column_stack([a, b]))
# [[1 4]
#  [2 5]
#  [3 6]]

# Concatenate
arr = np.array([[1, 2], [3, 4]])
print(np.concatenate([arr, arr], axis=0))   # vertical
print(np.concatenate([arr, arr], axis=1))   # horizontal

# Split
arr = np.arange(12)
print(np.split(arr, 3))        # 3 equal parts: [0-3] [4-7] [8-11]
print(np.array_split(arr, 5))  # 5 parts (unequal OK)
print(np.hsplit(arr.reshape(3,4), 2))  # split horizontally
print(np.vsplit(arr.reshape(3,4), 3))  # split vertically`,
      },
      {
        heading: "10. Linear Algebra",
        content: [
          "NumPy provides linear algebra functions essential for advanced data analysis and machine learning.",
        ],
        code: `# Matrix multiplication
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

print(A @ B)              # matrix multiplication (Python 3.5+)
print(np.dot(A, B))       # same thing
print(A.dot(B))           # same thing

# Element-wise multiplication
print(A * B)              # [[5 12] [21 32]]

# Determinant
print(np.linalg.det(A))   # -2.0

# Inverse
print(np.linalg.inv(A))

# Eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(A)

# Solve linear equations: Ax = B
# 2x + y = 5, x + 3y = 10
A = np.array([[2, 1], [1, 3]])
B = np.array([5, 10])
x = np.linalg.solve(A, B)
print(x)                  # [1. 3.] → x=1, y=3

# Norm (magnitude)
v = np.array([3, 4])
print(np.linalg.norm(v))  # 5.0

# Singular Value Decomposition (SVD)
U, S, V = np.linalg.svd(A)`,
      },
      {
        heading: "11. Random Number Generation",
        content: [
          "NumPy's random module is essential for simulations, sampling, and data generation.",
        ],
        code: `# Set seed for reproducibility
np.random.seed(42)

# Distributions
print(np.random.rand(5))            # uniform [0,1)
print(np.random.randn(5))           # standard normal
print(np.random.randint(0, 100, 5) # random integers
print(np.random.normal(50, 10, 5)) # mean=50, std=10
print(np.random.uniform(0, 1, 5))  # uniform
print(np.random.binomial(10, 0.5, 5)) # binomial
print(np.random.poisson(5, 5))     # Poisson

# Shuffling and sampling
arr = np.arange(10)
np.random.shuffle(arr)             # shuffle in place
print(arr)

sample = np.random.choice(arr, 5, replace=False)  # random sample
print(sample)

# Random permutation
print(np.random.permutation(10))`,
      },
      {
        heading: "12. Performance: NumPy vs Python Lists",
        content: [
          "NumPy is dramatically faster than pure Python for numerical operations because it uses optimized C code and contiguous memory.",
        ],
        code: `import time

# Python list
py_list = list(range(1000000))

# NumPy array
np_arr = np.arange(1000000)

# Time Python
start = time.time()
result = [x * 2 for x in py_list]
py_time = time.time() - start

# Time NumPy
start = time.time()
result = np_arr * 2
np_time = time.time() - start

print(f"Python: {py_time:.4f}s")
print(f"NumPy:  {np_time:.4f}s")
print(f"NumPy is {py_time/np_time:.1f}x faster")`,
      },
    ],
  },

  {
    id: "data-visualization-tutorial",
    title: "Data Visualization Tutorial",
    category: "Visualization",
    icon: "ChartArea",
    description: "Learn to create impactful charts with Matplotlib and Seaborn — bar, line, scatter, heatmap, and more.",
    level: "Intermediate",
    estimatedTime: "40 min read",
    sections: [
      {
        heading: "Why Data Visualization Matters",
        content: [
          "Data visualization turns numbers into visual stories. A good chart communicates insights faster than a table of numbers. As a Data Analyst, visualization is how you communicate your findings to stakeholders.",
        ],
      },
      {
        heading: "Choosing the Right Chart Type",
        content: [
          "Different data types and questions require different visualizations:",
        ],
        table: {
          headers: ["Question", "Chart Type", "Example"],
          rows: [
            ["How does X compare across categories?", "Bar chart", "Sales by region"],
            ["How does X change over time?", "Line chart", "Monthly revenue trend"],
            ["What is the relationship between X and Y?", "Scatter plot", "Price vs. demand"],
            ["What is the distribution of X?", "Histogram", "Age distribution of customers"],
            ["What is the composition of X?", "Pie/Donut chart", "Market share"],
            ["How is X distributed by category?", "Box plot", "Salary by department"],
            ["What is the correlation between variables?", "Heatmap", "Correlation matrix"],
            ["How do multiple variables relate?", "Pair plot", "All pairwise relationships"],
          ],
        },
      },
      {
        heading: "1. Matplotlib Basics",
        content: [
          "Matplotlib is Python's fundamental plotting library. It gives you full control over every element of a chart.",
        ],
        code: `import matplotlib.pyplot as plt
import numpy as np

# Line chart
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 5))
plt.plot(x, y, color="blue", linewidth=2, label="sin(x)")
plt.xlabel("X axis")
plt.ylabel("Y axis")
plt.title("Sine Wave")
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()

# Bar chart
categories = ["A", "B", "C", "D"]
values = [23, 45, 12, 67]

plt.bar(categories, values, color=["#4CAF50", "#2196F3", "#FF9800", "#f44336"])
plt.xlabel("Category")
plt.ylabel("Value")
plt.title("Bar Chart")
plt.show()

# Histogram
data = np.random.randn(1000)
plt.hist(data, bins=30, color="teal", edgecolor="white", alpha=0.7)
plt.xlabel("Value")
plt.ylabel("Frequency")
plt.title("Histogram")
plt.show()

# Scatter plot
x = np.random.rand(50)
y = 2 * x + np.random.randn(50) * 0.1
plt.scatter(x, y, color="purple", alpha=0.6)
plt.xlabel("X")
plt.ylabel("Y")
plt.title("Scatter Plot")
plt.show()`,
      },
      {
        heading: "2. Matplotlib Customization",
        content: [
          "Customize every aspect of your charts for professional results.",
        ],
        code: `# Subplots (multiple charts in one figure)
fig, axes = plt.subplots(2, 2, figsize=(12, 8))

axes[0, 0].plot([1, 2, 3], [1, 4, 9], "r-")
axes[0, 0].set_title("Line Chart")

axes[0, 1].bar(["A", "B", "C"], [3, 7, 2], color="skyblue")
axes[0, 1].set_title("Bar Chart")

axes[1, 0].scatter(np.random.rand(20), np.random.rand(20))
axes[1, 0].set_title("Scatter")

axes[1, 1].hist(np.random.randn(100), bins=20, color="salmon")
axes[1, 1].set_title("Histogram")

plt.tight_layout()
plt.show()

# Style
plt.style.available   # list all styles
plt.style.use("seaborn-v0_8-darkgrid")

# Save figure
plt.savefig("chart.png", dpi=300, bbox_inches="tight")
plt.savefig("chart.pdf")   # vector format
plt.savefig("chart.svg")   # scalable vector`,
      },
      {
        heading: "3. Seaborn — Statistical Visualization",
        content: [
          "Seaborn is built on Matplotlib and provides beautiful statistical visualizations with less code.",
        ],
        code: `import seaborn as sns
import pandas as pd

# Load sample dataset
df = pd.DataFrame({
    "category": np.random.choice(["A", "B", "C"], 100),
    "value": np.random.randn(100) * 10 + 50,
    "group": np.random.choice(["X", "Y"], 100)
})

# Box plot
sns.boxplot(data=df, x="category", y="value")
plt.title("Box Plot by Category")
plt.show()

# Violin plot
sns.violinplot(data=df, x="category", y="value")
plt.show()

# Distribution plot
sns.histplot(df["value"], kde=True, bins=20)
plt.show()

# Count plot
sns.countplot(data=df, x="category")
plt.show()

# Scatter with regression line
tips = sns.load_dataset("tips")
sns.regplot(data=tips, x="total_bill", y="tip")
plt.show()

# Pair plot (all pairwise relationships)
iris = sns.load_dataset("iris")
sns.pairplot(iris, hue="species")
plt.show()`,
      },
      {
        heading: "4. Heatmaps and Correlation",
        content: [
          "Heatmaps visualize matrices — commonly used for correlation analysis.",
        ],
        code: `# Correlation heatmap
data = pd.DataFrame({
    "sales": np.random.rand(100) * 100,
    "ads": np.random.rand(100) * 50,
    "price": np.random.rand(100) * 200,
    "season": np.random.rand(100) * 10
})

corr = data.corr()
sns.heatmap(corr, annot=True, cmap="coolwarm", center=0,
            square=True, linewidths=0.5)
plt.title("Correlation Heatmap")
plt.show()

# Pivot table heatmap
flights = sns.load_dataset("flights")
pivot = flights.pivot(index="month", columns="year", values="passengers")
sns.heatmap(pivot, cmap="YlOrRd", linewidths=0.5)
plt.title("Flight Passengers Heatmap")
plt.show()`,
      },
      {
        heading: "5. Advanced Charts",
        content: [
          "Specialized charts for specific analysis needs.",
        ],
        code: `# Pie / Donut chart
sizes = [30, 25, 20, 25]
labels = ["A", "B", "C", "D"]
colors = ["#ff9999", "#66b3ff", "#99ff99", "#ffcc99"]

plt.pie(sizes, labels=labels, colors=colors, autopct="%1.1f%%",
        startangle=90, wedgeprops={"width": 0.4})  # donut: width < 1
plt.title("Donut Chart")
plt.show()

# Area chart
x = range(12)
y = np.cumsum(np.random.rand(12) * 10)
plt.fill_between(x, y, alpha=0.3, color="teal")
plt.plot(x, y, color="teal")
plt.title("Area Chart")
plt.show()

# Multiple lines
for i in range(3):
    plt.plot(np.cumsum(np.random.randn(50)),
             label=f"Series {i+1}", alpha=0.7)
plt.legend()
plt.title("Multiple Line Chart")
plt.show()`,
      },
      {
        heading: "6. Visualization Best Practices",
        content: [
          "Good visualizations are clear, accurate, and tell a story:",
        ],
        list: [
          "Start with a clear question — know what you want to show",
          "Choose the right chart type for your data and question",
          "Use color meaningfully — not just for decoration",
          "Label everything: axes, title, legend, data labels for key points",
          "Remove clutter — less is more (chartjunk reduces clarity)",
          "Use consistent scales across comparable charts",
          "Sort bar charts by value (not alphabetically) for easier comparison",
          "Avoid 3D charts — they distort perception",
          "Limit pie charts to 5-7 categories max",
          "Use appropriate aspect ratios — don't stretch or compress",
          "Add context with annotations for important data points",
          "Make charts accessible — choose colorblind-friendly palettes",
        ],
      },
    ],
  },

  {
    id: "data-cleanup-tutorial",
    title: "Data Cleaning & Preprocessing Tutorial",
    category: "Data Workflow",
    icon: "Sparkles",
    description: "Learn to clean messy real-world data — handling missing values, duplicates, outliers, and inconsistent formats.",
    level: "Intermediate",
    estimatedTime: "40 min read",
    sections: [
      {
        heading: "What is Data Cleaning?",
        content: [
          "Data cleaning (or data cleansing) is the process of fixing or removing incorrect, corrupted, duplicate, or incomplete data within a dataset. Data scientists spend 60-80% of their time cleaning data — it is the most important step in any analysis.",
          "The principle is simple: garbage in, garbage out. No matter how sophisticated your analysis, if your data is dirty, your results will be wrong.",
        ],
      },
      {
        heading: "1. Identifying Data Quality Issues",
        content: [
          "Before cleaning, identify what needs fixing.",
        ],
        code: `import pandas as pd
import numpy as np

# Sample messy data
df = pd.DataFrame({
    "name": ["Amit", " amit ", "PRIYA", "Raj", "Raj", np.nan, "Sneha"],
    "age": [25, 25, -5, 999, 28, np.nan, 35],
    "email": ["amit@email.com", "amit@email.com", "priya@email.com",
              "raj@email.com", "raj@email.com", "", "sneha@email.com"],
    "salary": ["$50,000", "$75,000", "$60,000", "65000", "55000", np.nan, "$80,000"],
    "date": ["2023-01-15", "01/15/2023", "2023-03-20", "2023-06-01",
             "2023-06-01", "invalid", "2023-11-10"]
})

# Check for missing values
print(df.isnull().sum())

# Check data types
print(df.dtypes)

# Check for duplicates
print(df.duplicated().sum())

# View unique values
print(df["name"].unique())

# Summary statistics (helps spot outliers)
print(df.describe(include="all"))`,
      },
      {
        heading: "2. Handling Missing Values",
        content: [
          "Missing values are the most common data quality issue. You can drop them or fill (impute) them.",
        ],
        code: `# Drop rows with any missing values
df_clean = df.dropna()

# Drop rows where specific columns are missing
df_clean = df.dropna(subset=["name", "email"])

# Drop columns with too many missing values
df_clean = df.dropna(axis=1, thresh=len(df) * 0.7)  # keep if 70%+ non-null

# Fill with a constant
df["name"] = df["name"].fillna("Unknown")

# Fill numeric with mean/median
df["age"] = df["age"].fillna(df["age"].median())

# Forward fill / backward fill (for time series)
df["age"] = df["age"].ffill()   # use previous value
df["age"] = df["age"].bfill()   # use next value

# Fill categorical with mode
df["email"] = df["email"].replace("", np.nan)
df["email"] = df["email"].fillna(df["email"].mode()[0])

# Interpolation (for numeric data)
df["age"] = df["age"].interpolate(method="linear")`,
      },
      {
        heading: "3. Removing Duplicates",
        content: [
          "Duplicate data skews analysis. Identify and remove duplicates.",
        ],
        code: `# Find duplicates
print(df.duplicated())           # boolean mask
print(df.duplicated().sum())     # count
print(df[df.duplicated()])       # view duplicate rows

# Remove duplicates
df = df.drop_duplicates()        # keep first occurrence
df = df.drop_duplicates(keep="last")  # keep last
df = df.drop_duplicates(keep=False)   # remove all duplicates

# Check duplicates on specific columns
df = df.drop_duplicates(subset=["email"], keep="first")

# After removing, reset index
df = df.reset_index(drop=True)`,
      },
      {
        heading: "4. Fixing Text and String Issues",
        content: [
          "Text data often has inconsistent formatting — extra spaces, different cases, typos.",
        ],
        code: `# Remove leading/trailing whitespace
df["name"] = df["name"].str.strip()

# Standardize case
df["name"] = df["name"].str.title()  # "amit" → "Amit"
df["email"] = df["email"].str.lower()

# Replace values
df["name"] = df["name"].str.replace("  ", " ")  # double space to single

# Remove special characters
df["name"] = df["name"].str.replace("[^a-zA-Z ]", "", regex=True)

# Fix common typos with replace
df["city"] = df["city"].replace({
    "mumbai": "Mumbai",
    "MUMBAI": "Mumbai",
    "Bombay": "Mumbai"
})

# Standardize phone numbers
df["phone"] = df["phone"].str.replace(r"\\D", "", regex=True)  # digits only

# Extract information from strings
df["area_code"] = df["phone"].str[:3]`,
      },
      {
        heading: "5. Fixing Data Types",
        content: [
          "Columns often have wrong data types after import (e.g., numbers stored as text).",
        ],
        code: `# Convert to numeric
df["age"] = pd.to_numeric(df["age"], errors="coerce")
# errors="coerce" turns invalid values to NaN

# Convert to datetime
df["date"] = pd.to_datetime(df["date"], errors="coerce",
                            format="mixed")

# Convert to string
df["name"] = df["name"].astype(str)

# Convert to category (saves memory for repeated values)
df["city"] = df["city"].astype("category")

# Convert to int (after ensuring no NaN)
df["age"] = df["age"].fillna(0).astype(int)

# Clean and convert currency
df["salary"] = df["salary"].str.replace("$", "", regex=False)
df["salary"] = df["salary"].str.replace(",", "", regex=False)
df["salary"] = pd.to_numeric(df["salary"], errors="coerce")`,
      },
      {
        heading: "6. Handling Outliers",
        content: [
          "Outliers are values far outside the normal range. They can be errors or genuine extreme values.",
        ],
        code: `# Identify outliers with IQR method
Q1 = df["age"].quantile(0.25)
Q3 = df["age"].quantile(0.75)
IQR = Q3 - Q1

lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

outliers = df[(df["age"] < lower_bound) | (df["age"] > upper_bound)]
print(outliers)

# Remove outliers
df = df[(df["age"] >= lower_bound) & (df["age"] <= upper_bound)]

# Cap outliers (winsorize)
df["age"] = df["age"].clip(lower_bound, upper_bound)

# Replace with median
df.loc[df["age"] > upper_bound, "age"] = df["age"].median()

# Z-score method (for normally distributed data)
from scipy import stats
z_scores = np.abs(stats.zscore(df["age"]))
df = df[z_scores < 3]   # keep values within 3 std dev`,
      },
      {
        heading: "7. Standardizing and Normalizing",
        content: [
          "Scale numeric features to a standard range — important for comparisons and ML.",
        ],
        code: `# Min-Max normalization (0 to 1)
df["salary_norm"] = (df["salary"] - df["salary"].min()) / \\
                    (df["salary"].max() - df["salary"].min())

# Z-score standardization (mean=0, std=1)
df["salary_std"] = (df["salary"] - df["salary"].mean()) / df["salary"].std()

# Log transformation (for skewed data)
df["salary_log"] = np.log1p(df["salary"])   # log(1+x) handles zeros

# Using scikit-learn
# from sklearn.preprocessing import MinMaxScaler, StandardScaler
# scaler = MinMaxScaler()
# df[["salary_scaled"]] = scaler.fit_transform(df[["salary"]])`,
      },
      {
        heading: "8. Data Cleaning Checklist",
        content: [
          "Follow this checklist for every dataset:",
        ],
        list: [
          "1. Check data types and fix incorrect ones",
          "2. Handle missing values (drop or impute)",
          "3. Remove duplicate rows",
          "4. Strip whitespace and standardize text case",
          "5. Fix inconsistent formatting (dates, phone, currency)",
          "6. Remove or cap outliers",
          "7. Validate ranges (e.g., age should be 0-120)",
          "8. Check for impossible values (negative prices, future dates)",
          "9. Standardize categorical values (e.g., 'NYC' and 'New York City')",
          "10. Verify no data was lost during cleaning",
          "11. Document all changes you made",
        ],
      },
    ],
  },

  {
    id: "data-collection-tutorial",
    title: "Data Collection Tutorial",
    category: "Data Workflow",
    icon: "Download",
    description: "Learn methods and tools for collecting data — APIs, web scraping, databases, files, and surveys.",
    level: "Beginner",
    estimatedTime: "30 min read",
    sections: [
      {
        heading: "What is Data Collection?",
        content: [
          "Data collection is the first step in any data analysis project. It involves gathering data from various sources — databases, files, APIs, web pages, sensors, surveys, and more. The quality of your analysis depends on the quality of the data you collect.",
        ],
      },
      {
        heading: "Sources of Data",
        content: [
          "Data comes in two broad categories:",
        ],
        list: [
          "Primary data: collected directly (surveys, interviews, experiments, sensors)",
          "Secondary data: existing data (databases, public datasets, APIs, web scraping)",
          "",
          "Common data sources for analysts:",
          "Databases: SQL databases (PostgreSQL, MySQL), NoSQL (MongoDB)",
          "Files: CSV, Excel, JSON, XML, Parquet",
          "APIs: REST APIs that return JSON/XML data",
          "Web scraping: extracting data from web pages",
          "Public datasets: Kaggle, UCI ML Repository, government data",
          "Cloud storage: AWS S3, Google Cloud Storage, Azure Blob",
          "Spreadsheets: Google Sheets, Excel",
          "CRM/ERP systems: Salesforce, SAP",
        ],
      },
      {
        heading: "1. Reading Files with Python",
        content: [
          "The simplest data source — reading from files.",
        ],
        code: `import pandas as pd

# CSV
df = pd.read_csv("data.csv")
df = pd.read_csv("data.csv", sep=";", encoding="utf-8")

# Excel
df = pd.read_excel("data.xlsx", sheet_name="Sheet1")

# JSON
df = pd.read_json("data.json")
import json
with open("data.json") as f:
    data = json.load(f)

# Multiple CSVs
import glob
files = glob.glob("data/*.csv")
df = pd.concat([pd.read_csv(f) for f in files], ignore_index=True)

# Parquet (efficient columnar format)
df = pd.read_parquet("data.parquet")

# From URL
df = pd.read_csv("https://example.com/data.csv")`,
      },
      {
        heading: "2. Collecting Data from APIs",
        content: [
          "APIs (Application Programming Interfaces) provide structured data. Many services offer free APIs.",
        ],
        code: `import requests
import pandas as pd

# Simple GET request
response = requests.get("https://api.example.com/data")
data = response.json()    # convert to Python dict/list

# With parameters
params = {"category": "electronics", "limit": 100}
response = requests.get("https://api.example.com/products",
                        params=params)
data = response.json()

# With API key (headers)
headers = {"Authorization": "Bearer YOUR_API_KEY"}
response = requests.get("https://api.example.com/secure",
                        headers=headers)

# Convert to DataFrame
df = pd.DataFrame(data["results"])
print(df.head())

# Handle pagination
all_data = []
page = 1
while True:
    response = requests.get(
        f"https://api.example.com/data?page={page}"
    )
    data = response.json()
    if not data["results"]:
        break
    all_data.extend(data["results"])
    page += 1

df = pd.DataFrame(all_data)`,
      },
      {
        heading: "3. Connecting to Databases",
        content: [
          "SQL databases are the most common data source in organizations.",
        ],
        code: `import pandas as pd
from sqlalchemy import create_engine

# Connect to PostgreSQL
engine = create_engine("postgresql://user:password@host:5432/database")

# Connect to MySQL
# engine = create_engine("mysql://user:password@host:3306/database")

# Connect to SQLite
# engine = create_engine("sqlite:///database.db")

# Read entire table
df = pd.read_sql("SELECT * FROM employees", engine)

# Read with query
df = pd.read_sql("""
    SELECT department, AVG(salary) as avg_salary
    FROM employees
    GROUP BY department
""", engine)

# Write to database
df.to_sql("processed_data", engine, if_exists="replace", index=False)`,
      },
      {
        heading: "4. Public Datasets",
        content: [
          "Free datasets for practice and projects:",
        ],
        list: [
          "Kaggle (kaggle.com/datasets) — thousands of free datasets",
          "UCI ML Repository (archive.ics.uci.edu) — classic ML datasets",
          "Google Dataset Search (datasetsearch.research.google.com)",
          "Government data (data.gov, data.gov.in)",
          "World Bank Open Data (data.worldbank.org)",
          "Kaggle API: pip install kaggle, then kaggle datasets download",
          "scikit-learn built-in datasets: from sklearn.datasets import load_iris",
          "Seaborn built-in datasets: sns.load_dataset('tips')",
        ],
      },
      {
        heading: "5. Data Collection Best Practices",
        content: [
          "Collect data systematically and ethically:",
        ],
        list: [
          "Define what data you need before collecting — avoid collecting 'just in case'",
          "Document the source, date, and method of collection",
          "Check data licenses and usage rights",
          "Store raw data unchanged — clean a copy, not the original",
          "Automate collection with scripts (schedule with cron or task scheduler)",
          "Validate data as it arrives — check for missing or invalid values",
          "Keep track of data versions (use git or timestamp files)",
        ],
      },
    ],
  },

  {
    id: "data-exploration-tutorial",
    title: "Data Exploration (EDA) Tutorial",
    category: "Data Workflow",
    icon: "Search",
    description: "Exploratory Data Analysis — understand your data through statistics, distributions, and visual discovery.",
    level: "Intermediate",
    estimatedTime: "35 min read",
    sections: [
      {
        heading: "What is Exploratory Data Analysis (EDA)?",
        content: [
          "EDA is the process of exploring a dataset to understand its main characteristics — distributions, patterns, relationships, anomalies, and structure. It is the detective work of data analysis: you ask questions and the data answers.",
          "EDA is always the first step after data cleaning. You cannot build meaningful analysis without understanding your data first.",
        ],
      },
      {
        heading: "1. Initial Data Inspection",
        content: [
          "Start by getting a high-level view of your dataset.",
        ],
        code: `import pandas as pd
import numpy as np

df = pd.read_csv("dataset.csv")

# Shape and size
print(f"Rows: {df.shape[0]}, Columns: {df.shape[1]}")

# First and last rows
print(df.head())
print(df.tail())

# Column names and data types
print(df.dtypes)

# Summary info
print(df.info())

# Statistical summary
print(df.describe())               # numeric columns
print(df.describe(include="all"))  # all columns

# Sample
print(df.sample(10))`,
      },
      {
        heading: "2. Understanding Distributions",
        content: [
          "Distribution shows how values are spread across a variable. This is foundational to understanding your data.",
        ],
        code: `import matplotlib.pyplot as plt
import seaborn as sns

# Histogram — distribution of a numeric variable
plt.figure(figsize=(10, 5))
sns.histplot(df["age"], bins=30, kde=True)
plt.title("Age Distribution")
plt.show()

# Box plot — shows median, quartiles, and outliers
sns.boxplot(x=df["salary"])
plt.title("Salary Box Plot")
plt.show()

# Box plot by category
sns.boxplot(data=df, x="department", y="salary")
plt.xticks(rotation=45)
plt.show()

# Violin plot — distribution + box plot
sns.violinplot(data=df, x="department", y="salary")
plt.show()

# Density plot
sns.kdeplot(df["salary"], shade=True)
plt.show()`,
      },
      {
        heading: "3. Analyzing Categorical Variables",
        content: [
          "Categorical variables need different exploration techniques.",
        ],
        code: `# Frequency counts
print(df["department"].value_counts())

# Proportions
print(df["department"].value_counts(normalize=True) * 100)

# Visual: bar chart
df["department"].value_counts().plot(kind="bar")
plt.title("Department Distribution")
plt.show()

# Visual: pie chart
df["department"].value_counts().plot(kind="pie", autopct="%1.1f%%")
plt.show()

# Cross tabulation (two categorical variables)
print(pd.crosstab(df["department"], df["gender"]))

# Stacked bar chart
pd.crosstab(df["department"], df["gender"]).plot(kind="bar", stacked=True)
plt.show()`,
      },
      {
        heading: "4. Finding Relationships",
        content: [
          "Explore how variables relate to each other.",
        ],
        code: `# Correlation matrix
numeric_df = df.select_dtypes(include=[np.number])
corr = numeric_df.corr()
print(corr)

# Correlation heatmap
plt.figure(figsize=(10, 8))
sns.heatmap(corr, annot=True, cmap="coolwarm", center=0)
plt.title("Correlation Matrix")
plt.show()

# Scatter plot (relationship between 2 variables)
plt.scatter(df["experience"], df["salary"])
plt.xlabel("Experience (years)")
plt.ylabel("Salary")
plt.title("Experience vs Salary")
plt.show()

# Pair plot (all pairwise relationships)
sns.pairplot(df[["age", "salary", "experience"]])
plt.show()

# Group statistics
print(df.groupby("department")["salary"].agg(["mean", "median", "std"]))`,
      },
      {
        heading: "5. Identifying Outliers and Anomalies",
        content: [
          "Outliers can be errors or genuine extreme values. EDA helps you find them.",
        ],
        code: `# Using IQR
Q1 = df["salary"].quantile(0.25)
Q3 = df["salary"].quantile(0.75)
IQR = Q3 - Q1
outliers = df[(df["salary"] < Q1 - 1.5*IQR) | (df["salary"] > Q3 + 1.5*IQR)]
print(f"Outliers: {len(outliers)}")
print(outliers)

# Z-score
from scipy import stats
z = np.abs(stats.zscore(df["salary"]))
outliers = df[z > 3]
print(outliers)

# Visual: box plot shows outliers as dots
sns.boxplot(x=df["salary"])
plt.show()`,
      },
      {
        heading: "6. Handling Missing Data Exploration",
        content: [
          "Understand the pattern of missing data.",
        ],
        code: `# Missing value counts
print(df.isnull().sum())

# Percentage missing
print((df.isnull().sum() / len(df)) * 100)

# Visual: missing value heatmap
sns.heatmap(df.isnull(), cbar=False, cmap="viridis")
plt.title("Missing Values Heatmap")
plt.show()

# Missing value bar chart
df.isnull().sum().plot(kind="bar")
plt.title("Missing Values per Column")
plt.show()`,
      },
      {
        heading: "7. EDA Checklist",
        content: [
          "Follow this process for every new dataset:",
        ],
        list: [
          "1. Check dimensions (rows, columns) and data types",
          "2. View sample rows (head, tail, random sample)",
          "3. Check for missing values and their patterns",
          "4. Get summary statistics (mean, median, std, min, max)",
          "5. Plot distributions of key numeric variables",
          "6. Examine frequency of categorical variables",
          "7. Look at correlations between numeric variables",
          "8. Identify outliers and anomalies",
          "9. Explore group differences (e.g., by category)",
          "10. Note interesting patterns and form hypotheses",
          "11. Document your findings",
        ],
      },
    ],
  },

  {
    id: "data-transformation-tutorial",
    title: "Data Transformation Tutorial",
    category: "Data Workflow",
    icon: "Wand2",
    description: "Reshape, normalize, and prepare data — melting, pivoting, binning, encoding, and feature engineering.",
    level: "Intermediate",
    estimatedTime: "35 min read",
    sections: [
      {
        heading: "What is Data Transformation?",
        content: [
          "Data transformation converts data from one format or structure to another to make it suitable for analysis. This includes reshaping (wide to long, long to wide), normalizing, encoding, creating new features, and aggregating.",
        ],
      },
      {
        heading: "1. Reshaping Data — Melt and Pivot",
        content: [
          "Melt converts wide-format data to long format. Pivot does the reverse.",
        ],
        code: `import pandas as pd

# Wide format
df_wide = pd.DataFrame({
    "name": ["Amit", "Priya", "Raj"],
    "Jan": [100, 200, 150],
    "Feb": [120, 210, 160],
    "Mar": [130, 220, 170]
})
print(df_wide)
#    name  Jan  Feb  Mar
# 0  Amit  100  120  130
# 1 Priya  200  210  220
# 2   Raj  150  160  170

# Melt to long format
df_long = df_wide.melt(id_vars="name",
                       var_name="month",
                       value_name="sales")
print(df_long)
#     name month  sales
# 0   Amit   Jan    100
# 1   Amit   Feb    120
# 2   Amit   Mar    130
# ...

# Pivot back to wide
df_wide_again = df_long.pivot(index="name",
                              columns="month",
                              values="sales").reset_index()`,
      },
      {
        heading: "2. Binning and Discretization",
        content: [
          "Convert continuous numeric values into discrete bins (categories).",
        ],
        code: `# Equal-width bins
df["age_group"] = pd.cut(df["age"], bins=5)

# Custom bins
df["age_category"] = pd.cut(df["age"],
    bins=[0, 18, 35, 50, 100],
    labels=["Youth", "Young Adult", "Adult", "Senior"])

# Equal-frequency bins (quantiles)
df["salary_quartile"] = pd.qcut(df["salary"], q=4,
    labels=["Q1", "Q2", "Q3", "Q4"])

# View bin counts
print(df["age_category"].value_counts())`,
      },
      {
        heading: "3. Encoding Categorical Variables",
        content: [
          "Machine learning models need numbers, not text. Encoding converts categories to numbers.",
        ],
        code: `# Label encoding (ordinal)
df["grade_encoded"] = df["grade"].map({
    "F": 0, "D": 1, "C": 2, "B": 3, "A": 4
})

# One-hot encoding (nominal)
df_encoded = pd.get_dummies(df, columns=["department"],
                            prefix="dept")
# Creates: dept_Sales, dept_Engineering, dept_Marketing

# Using sklearn
# from sklearn.preprocessing import LabelEncoder, OneHotEncoder
# le = LabelEncoder()
# df["dept_encoded"] = le.fit_transform(df["department"])

# Frequency encoding
freq = df["city"].value_counts(normalize=True)
df["city_freq"] = df["city"].map(freq)

# Target encoding (encode with mean of target variable)
city_mean = df.groupby("city")["salary"].mean()
df["city_mean_salary"] = df["city"].map(city_mean)`,
      },
      {
        heading: "4. Feature Engineering",
        content: [
          "Create new features from existing data to improve analysis and modeling.",
        ],
        code: `# Date features
df["date"] = pd.to_datetime(df["date"])
df["year"] = df["date"].dt.year
df["month"] = df["date"].dt.month
df["day_of_week"] = df["date"].dt.day_name()
df["is_weekend"] = df["date"].dt.dayofweek >= 5
df["quarter"] = df["date"].dt.quarter

# Text features
df["name_length"] = df["name"].str.len()
df["word_count"] = df["description"].str.split().str.len()
df["has_email"] = df["email"].str.contains("@", na=False)

# Mathematical features
df["salary_per_year"] = df["salary"] / df["experience"]
df["log_salary"] = np.log1p(df["salary"])
df["salary_squared"] = df["salary"] ** 2

# Interaction features
df["age_experience_ratio"] = df["age"] / df["experience"]
df["dept_city"] = df["department"] + "_" + df["city"]`,
      },
      {
        heading: "5. Normalization and Scaling",
        content: [
          "Scale features to comparable ranges.",
        ],
        code: `# Min-Max scaling (0 to 1)
df["salary_scaled"] = (df["salary"] - df["salary"].min()) / \\
                      (df["salary"].max() - df["salary"].min())

# Standard scaling (mean=0, std=1)
df["salary_standardized"] = (df["salary"] - df["salary"].mean()) / \\
                            df["salary"].std()

# Robust scaling (using median and IQR — robust to outliers)
median = df["salary"].median()
IQR = df["salary"].quantile(0.75) - df["salary"].quantile(0.25)
df["salary_robust"] = (df["salary"] - median) / IQR

# Log transformation (for skewed data)
df["salary_log"] = np.log1p(df["salary"])

# Using scikit-learn
# from sklearn.preprocessing import MinMaxScaler, StandardScaler, RobustScaler
# scaler = StandardScaler()
# df[["salary_scaled"]] = scaler.fit_transform(df[["salary"]])`,
      },
      {
        heading: "6. Aggregation and Roll-up",
        content: [
          "Aggregate data at different levels of granularity.",
        ],
        code: `# Daily to monthly
df["date"] = pd.to_datetime(df["date"])
df["year_month"] = df["date"].dt.to_period("M")

monthly = df.groupby("year_month")["sales"].sum()
print(monthly)

# Multiple aggregations
summary = df.groupby(["department", "year_month"]).agg({
    "sales": ["sum", "mean", "count"],
    "profit": "sum"
})

# Pivot table for cross-tabulation
pivot = df.pivot_table(
    values="sales",
    index="department",
    columns="month",
    aggfunc="sum",
    fill_value=0
)`,
      },
    ],
  },

  {
    id: "data-manipulation-tutorial",
    title: "Data Manipulation Tutorial",
    category: "Data Workflow",
    icon: "Wrench",
    description: "Filter, sort, merge, and manipulate data with Pandas — the everyday toolkit of a Data Analyst.",
    level: "Intermediate",
    estimatedTime: "35 min read",
    sections: [
      {
        heading: "What is Data Manipulation?",
        content: [
          "Data manipulation is the process of changing or restructuring data to make it more organized and easier to analyze. This includes filtering, sorting, merging, joining, appending, and updating data. It is the bread and butter of a Data Analyst's daily work.",
        ],
      },
      {
        heading: "1. Filtering Data",
        content: [
          "Select rows based on conditions.",
        ],
        code: `import pandas as pd

# Single condition
high_salary = df[df["salary"] > 50000]

# Multiple conditions (AND / OR)
result = df[(df["salary"] > 50000) & (df["age"] < 30)]
result = df[(df["city"] == "Mumbai") | (df["city"] == "Delhi")]

# Using isin
result = df[df["city"].isin(["Mumbai", "Delhi", "Pune"])]

# String conditions
result = df[df["name"].str.contains("Am", case=False, na=False)]
result = df[df["email"].str.endswith("@gmail.com", na=False)]

# Between
result = df[df["age"].between(25, 40)]

# Negation
result = df[~df["city"].isin(["Mumbai"])]  # NOT Mumbai

# Query method (readable syntax)
result = df.query("salary > 50000 and age < 30")
result = df.query("city in ['Mumbai', 'Delhi']")

# Filter by null/not-null
result = df[df["email"].notna()]
result = df[df["email"].isna()]`,
      },
      {
        heading: "2. Sorting Data",
        content: [
          "Arrange rows by one or more columns.",
        ],
        code: `# Sort by one column
df_sorted = df.sort_values("salary")
df_sorted = df.sort_values("salary", ascending=False)

# Sort by multiple columns
df_sorted = df.sort_values(["department", "salary"],
                           ascending=[True, False])

# Sort by index
df_sorted = df.sort_index()

# Sort by absolute value
df_sorted = df.reindex(df["salary"].abs().sort_values(ascending=False).index)

# Sort and reset index
df_sorted = df.sort_values("salary", ascending=False).reset_index(drop=True)

# Top N
top_10 = df.nlargest(10, "salary")
bottom_10 = df.nsmallest(10, "salary")`,
      },
      {
        heading: "3. Merging and Joining",
        content: [
          "Combine multiple DataFrames — like SQL JOINs.",
        ],
        code: `# Inner join (only matching rows)
merged = pd.merge(df1, df2, on="id", how="inner")

# Left join (all from left, matching from right)
merged = pd.merge(df1, df2, on="id", how="left")

# Right join
merged = pd.merge(df1, df2, on="id", how="right")

# Full outer join
merged = pd.merge(df1, df2, on="id", how="outer")

# Different column names
merged = pd.merge(df1, df2,
                 left_on="employee_id",
                 right_on="emp_id",
                 how="left")

# Multiple keys
merged = pd.merge(df1, df2, on=["dept_id", "city"], how="inner")

# Suffixes for overlapping columns
merged = pd.merge(df1, df2, on="id", suffixes=("_left", "_right"))

# Join on index
merged = df1.join(df2, how="left")`,
      },
      {
        heading: "4. Concatenating Data",
        content: [
          "Stack DataFrames vertically or horizontally.",
        ],
        code: `# Stack vertically (add rows)
combined = pd.concat([df1, df2, df3], ignore_index=True)

# Stack horizontally (add columns)
combined = pd.concat([df1, df2], axis=1)

# Append (deprecated, use concat)
combined = pd.concat([df1, df2])

# Combine with different columns
# df1 has columns A, B; df2 has columns B, C
combined = pd.concat([df1, df2], ignore_index=True)
# Missing columns filled with NaN`,
      },
      {
        heading: "5. Grouping and Aggregating",
        content: [
          "Split-apply-combine: group data and compute summaries.",
        ],
        code: `# Group by one column
df.groupby("department")["salary"].mean()

# Group by multiple columns
df.groupby(["department", "city"])["salary"].mean()

# Multiple aggregations
df.groupby("department")["salary"].agg(
    ["mean", "median", "std", "min", "max", "count"]
)

# Named aggregations
result = df.groupby("department").agg(
    avg_salary=("salary", "mean"),
    max_salary=("salary", "max"),
    employee_count=("name", "count"),
    avg_age=("age", "mean")
)

# Custom aggregation
df.groupby("department")["salary"].agg(
    salary_range=lambda x: x.max() - x.min()
)

# Transform (return same shape as input)
df["dept_avg_salary"] = df.groupby("department")["salary"].transform("mean")

# Filter groups
large_depts = df.groupby("department").filter(
    lambda x: len(x) > 10
)

# Apply custom function per group
def top_earner(group):
    return group.nlargest(1, "salary")

top_earners = df.groupby("department").apply(top_earner)`,
      },
      {
        heading: "6. Window Functions",
        content: [
          "Perform calculations across rows — running totals, moving averages, rankings.",
        ],
        code: `# Running total
df["cumulative_sales"] = df["sales"].cumsum()

# Running max/min
df["running_max"] = df["sales"].cummax()
df["running_min"] = df["sales"].cummin()

# Moving average (window of 3)
df["moving_avg"] = df["sales"].rolling(window=3).mean()

# Expanding average (all previous rows)
df["expanding_avg"] = df["sales"].expanding().mean()

# Rank
df["rank"] = df["salary"].rank(ascending=False)
df["dense_rank"] = df["salary"].rank(method="dense", ascending=False)

# Rank within group
df["dept_rank"] = df.groupby("department")["salary"].rank(ascending=False)

# Shift (lag/lead)
df["prev_salary"] = df["salary"].shift(1)
df["next_salary"] = df["salary"].shift(-1)

# Percent change
df["salary_change_pct"] = df["salary"].pct_change() * 100`,
      },
      {
        heading: "7. String Manipulation",
        content: [
          "Clean and transform text data using Pandas string methods.",
        ],
        code: `# Split column into multiple
df[["first_name", "last_name"]] = df["full_name"].str.split(" ", n=1,
    expand=True)

# Extract with regex
df["phone_area"] = df["phone"].str.extract(r"(\\d{3})")

# Replace with regex
df["text"] = df["text"].str.replace(r"\\s+", " ", regex=True)

# String length
df["name_length"] = df["name"].str.len()

# Contains
df["is_gmail"] = df["email"].str.contains("gmail", case=False)

# Startswith / endswith
df["is_com"] = df["email"].str.endswith(".com")

# Pad strings
df["code"] = df["code"].str.zfill(5)  # pad with zeros: "42" → "00042"`,
      },
      {
        heading: "8. Pivot Tables and Crosstabs",
        content: [
          "Reshape data for reporting and analysis.",
        ],
        code: `# Pivot table
pivot = pd.pivot_table(df,
    values="sales",
    index="department",
    columns="month",
    aggfunc="sum",
    fill_value=0,
    margins=True      # add row/column totals
)

# Crosstab (count of combinations)
ct = pd.crosstab(df["department"], df["city"],
                 margins=True)

# Crosstab with values
ct = pd.crosstab(df["department"], df["city"],
                 values=df["salary"],
                 aggfunc="mean")`,
      },
    ],
  },

  {
    id: "charting-pivot-table-tutorial",
    title: "Charting & Pivot Tables Tutorial",
    category: "Reporting",
    icon: "ChartColumn",
    description: "Master Excel and Pandas pivot tables and create professional charts for reporting.",
    level: "Intermediate",
    estimatedTime: "35 min read",
    sections: [
      {
        heading: "Pivot Tables in Excel — Deep Dive",
        content: [
          "Pivot tables are the most powerful tool in Excel for data analysis. They let you summarize thousands of rows into a compact report with just drag-and-drop.",
        ],
      },
      {
        heading: "1. Creating a Pivot Table (Step by Step)",
        content: [
          "Follow these steps to create your first pivot table:",
        ],
        list: [
          "1. Click any cell inside your data (it should have headers)",
          "2. Go to Insert > PivotTable",
          "3. Excel auto-detects the data range — verify it's correct",
          "4. Choose: New Worksheet (recommended) or Existing Worksheet",
          "5. Click OK — the PivotTable Fields pane appears on the right",
          "6. Drag fields to the four areas:",
          "   FILTERS: filter the entire pivot table (e.g., Year)",
          "   ROWS: group data vertically (e.g., Department)",
          "   COLUMNS: split data horizontally (e.g., Month)",
          "   VALUES: the metric to aggregate (e.g., Sum of Sales)",
          "7. Right-click values > Summarize Values By > choose Sum/Average/Count/Max/Min",
        ],
      },
      {
        heading: "2. Pivot Table Aggregations",
        content: [
          "Pivot tables can aggregate data in many ways:",
        ],
        table: {
          headers: ["Function", "Description", "Use Case"],
          rows: [
            ["Sum", "Add values", "Total sales by region"],
            ["Count", "Number of records", "Number of orders per customer"],
            ["Average", "Mean value", "Average order value per month"],
            ["Max", "Largest value", "Highest sale per region"],
            ["Min", "Smallest value", "Lowest price per category"],
            ["Product", "Multiply values", "Rarely used"],
            ["Count Numbers", "Count numeric cells", "Count of transactions"],
            ["StdDev", "Standard deviation", "Variability of sales per region"],
            ["Var", "Variance", "Spread of data per group"],
          ],
        },
      },
      {
        heading: "3. Grouping in Pivot Tables",
        content: [
          "Group data into categories for better analysis.",
        ],
        list: [
          "Group by date: right-click date field > Group > choose Years, Quarters, Months, Days",
          "Group by number range: right-click numeric field > Group > set start, end, and interval (e.g., 0-100 in bins of 10)",
          "Manual grouping: select items > right-click > Group > rename the group",
          "Ungroup: right-click grouped field > Ungroup",
        ],
      },
      {
        heading: "4. Calculated Fields and Items",
        content: [
          "Add custom calculations to pivot tables.",
        ],
        list: [
          "Calculated Field: a new field computed from existing fields (PivotTable Analyze > Fields, Items & Sets > Calculated Field)",
          "  Example: Profit = Revenue - Cost",
          "Calculated Item: a new item within a field computed from other items",
          "  Example: North America = North + South",
          "Note: Calculated fields always use Sum regardless of the display aggregation",
        ],
      },
      {
        heading: "5. Slicers and Timelines",
        content: [
          "Slicers are visual filters that make pivot tables interactive.",
        ],
        list: [
          "Add slicer: select pivot table > PivotTable Analyze > Insert Slicer > choose field",
          "Slicers show buttons for each value — click to filter",
          "Connect multiple pivot tables to one slicer: Slicer > Report Connections > check pivot tables",
          "Timeline: for date fields, use Insert > Timeline for a date slider",
          "Format slicers: right-click > Size and Properties for customization",
        ],
      },
      {
        heading: "6. Pivot Charts in Excel",
        content: [
          "Pivot charts visualize pivot table data and stay linked to the pivot table.",
        ],
        list: [
          "Create: select pivot table > Insert > PivotChart > choose type",
          "The chart updates automatically when you change the pivot table",
          "Use Slicers and Timelines to filter both table and chart together",
          "Recommended chart types:",
          "  — Bar/Column: compare categories",
          "  — Line: trends over time",
          "  — Pie: show composition (max 5-7 slices)",
          "  — Combo: bar + line (e.g., revenue as bars, growth rate as line)",
        ],
      },
      {
        heading: "7. Pivot Tables in Pandas",
        content: [
          "Pandas has its own pivot_table function that works like Excel pivot tables.",
        ],
        code: `import pandas as pd

# Sample data
df = pd.DataFrame({
    "department": ["Sales", "Sales", "Engineering", "Engineering",
                   "Marketing", "Marketing"],
    "month": ["Jan", "Feb", "Jan", "Feb", "Jan", "Feb"],
    "sales": [10000, 12000, 15000, 16000, 8000, 9000],
    "profit": [2000, 2500, 4000, 4200, 1500, 1800]
})

# Basic pivot table
pivot = pd.pivot_table(df, values="sales",
                       index="department",
                       columns="month",
                       aggfunc="sum")
print(pivot)
# month          Feb    Jan
# department
# Engineering  16000  15000
# Marketing     9000   8000
# Sales        12000  10000

# Multiple aggregations
pivot = pd.pivot_table(df,
    values=["sales", "profit"],
    index="department",
    aggfunc={"sales": "sum", "profit": "mean"}
)

# With margins (totals)
pivot = pd.pivot_table(df, values="sales",
                       index="department",
                       columns="month",
                       aggfunc="sum",
                       margins=True,
                       margins_name="Total")

# Fill NaN with 0
pivot = pd.pivot_table(df, values="sales",
                       index="department",
                       columns="month",
                       aggfunc="sum",
                       fill_value=0)`,
      },
      {
        heading: "8. Creating Professional Charts",
        content: [
          "Whether in Excel or Python, good charts follow design principles.",
        ],
        list: [
          "Title: clear and descriptive — tell what the chart shows",
          "Axis labels: always label what the axes represent (with units)",
          "Color: use a consistent, meaningful palette — not random colors",
          "Legend: place it where it doesn't obscure data",
          "Data labels: show values on key data points",
          "Gridlines: subtle, not overwhelming",
          "Font size: readable at the size the chart will be displayed",
          "Aspect ratio: avoid distortion — typically wider than tall (16:9 or 4:3)",
        ],
      },
      {
        heading: "9. Chart Types in Depth",
        content: [
          "Choose the right chart for your data:",
        ],
        table: {
          headers: ["Chart Type", "When to Use", "When NOT to Use"],
          rows: [
            ["Column/Bar", "Compare categories", "Many categories (>15)"],
            ["Line", "Show trends over time", "Non-continuous data"],
            ["Pie", "Show parts of a whole (5 max)", "More than 7 categories"],
            ["Scatter", "Show relationship between 2 variables", "Categorical data"],
            ["Histogram", "Show distribution of one variable", "Categorical data"],
            ["Box Plot", "Show distribution + outliers", "Single category"],
            ["Heatmap", "Show 2D data density", "Single variable"],
            ["Waterfall", "Show cumulative effect", "Non-financial data"],
            ["Funnel", "Show stages in a process", "Non-sequential data"],
            ["Combo", "Show 2 related metrics with different scales", "Unrelated metrics"],
          ],
        },
      },
    ],
  },

  {
    id: "deploy-wordpress-blogger",
    title: "Deploy This Website on WordPress & Google Blogger",
    category: "Deployment",
    icon: "Upload",
    description: "A complete, step-by-step guide to uploading and publishing this website on WordPress and Google Blogger — from beginner setup to advanced customization.",
    level: "Beginner",
    estimatedTime: "50 min read",
    sections: [
      {
        heading: "Overview — What You Will Learn",
        content: [
          "This tutorial walks you through the full process of taking a React-based website (like this one) and publishing it on two popular platforms: WordPress and Google Blogger. We cover everything from exporting your build files to advanced theme customization and SEO optimization.",
          "You do not need prior experience with either platform. By the end, you will have your site live and accessible to the world.",
        ],
      },
      {
        heading: "Prerequisites",
        content: [
          "Before starting, make sure you have:",
        ],
        list: [
          "Your website project files (the built version — we will cover how to build)",
          "A WordPress hosting account (WordPress.com or self-hosted with a hosting provider)",
          "A Google account (for Blogger)",
          "Basic understanding of file management (copying, pasting, uploading files)",
          "A text editor (VS Code, Notepad++, or even Notepad) to make small edits",
        ],
      },
      {
        heading: "Part 1: Building Your React Website for Deployment",
        content: [
          "Before uploading anywhere, you need to create a production build of your React app. This generates static HTML, CSS, and JavaScript files that can be served by any platform.",
        ],
        list: [
          "1. Open your project folder in a terminal",
          "2. Run: npm run build",
          "3. After the build completes, a new folder called 'dist' (or 'build') is created",
          "4. This folder contains all the files you need to upload — index.html, assets folder, CSS, and JS files",
          "5. Open the dist/index.html file in your browser to verify the site works locally",
        ],
      },
      {
        heading: "Important: Understanding How React Builds Work",
        content: [
          "When you build a React app, it creates static files. However, the file paths in index.html may be absolute (starting with /). For WordPress and Blogger, you need relative paths so the files load correctly when placed in a subdirectory or custom location.",
        ],
        code: `// In vite.config.ts, set the base to './' for relative paths
export default defineConfig({
  base: './',  // This makes all asset paths relative
  plugins: [react()],
  // ... rest of config
})`,
      },
      {
        heading: "Part 2: Deploying on WordPress — Beginner Level",
        content: [
          "WordPress is the world's most popular content management system. There are two ways to deploy your site on WordPress: as a custom page/post, or as a full custom theme.",
        ],
      },
      {
        heading: "Method A: Upload as a Custom HTML Block (Easiest)",
        content: [
          "This method works best if you want to add your React site as a page within an existing WordPress site.",
        ],
        list: [
          "1. Log in to your WordPress admin dashboard (usually yoursite.com/wp-admin)",
          "2. Go to Pages > Add New (or Posts > Add New)",
          "3. Click the + button to add a block and search for 'Custom HTML'",
          "4. Open your built index.html file in a text editor",
          "5. Copy the entire content of index.html and paste it into the Custom HTML block",
          "6. You will also need to upload your CSS and JS files — go to Media > Add New and upload all files from the dist/assets folder",
          "7. Get the URLs of the uploaded CSS and JS files and update the <link> and <script> tags in your HTML to point to those URLs",
          "8. Click Publish to make the page live",
          "9. Visit the page to verify it displays correctly",
        ],
      },
      {
        heading: "Method A: Updating Asset Paths for WordPress",
        content: [
          "When you upload assets to WordPress Media, they get URLs like https://yoursite.com/wp-content/uploads/2026/09/assets/index-abc123.js. You need to update your HTML to reference these URLs.",
        ],
        code: `<!-- Original from build -->
<link rel="stylesheet" href="/assets/index-abc123.css">
<script src="/assets/index-abc123.js"></script>

<!-- Updated for WordPress Media -->
<link rel="stylesheet" href="https://yoursite.com/wp-content/uploads/2026/09/index-abc123.css">
<script src="https://yoursite.com/wp-content/uploads/2026/09/index-abc123.js"></script>`,
      },
      {
        heading: "Method B: Upload via File Manager / FTP (Intermediate)",
        content: [
          "This method gives you more control and is better for full-page React apps.",
        ],
        list: [
          "1. Access your hosting control panel (cPanel, Plesk, etc.)",
          "2. Open the File Manager",
          "3. Navigate to public_html (or the directory where your WordPress is installed)",
          "4. Create a new folder, e.g., 'app' (your site will be at yoursite.com/app/)",
          "5. Upload ALL files from your dist folder into this 'app' directory",
          "6. Make sure index.html is in the root of the 'app' folder",
          "7. Visit yoursite.com/app/ — your React site should load",
          "8. If you get a blank page, check browser console for 404 errors on assets",
        ],
      },
      {
        heading: "Method B: Using FTP (File Transfer Protocol)",
        content: [
          "If your hosting does not have a File Manager, use an FTP client like FileZilla.",
        ],
        list: [
          "1. Download and install FileZilla (filezilla-project.org)",
          "2. Get your FTP credentials from your hosting provider (host, username, password, port)",
          "3. Open FileZilla and enter your credentials in the Quickconnect bar",
          "4. On the right side (Remote Site), navigate to public_html",
          "5. Create a new folder called 'app'",
          "6. On the left side (Local Site), navigate to your dist folder",
          "7. Select all files in the dist folder and drag them to the 'app' folder on the right",
          "8. Wait for all files to upload (this may take a few minutes)",
          "9. Visit yoursite.com/app/ to verify",
        ],
      },
      {
        heading: "Method C: Create a Custom WordPress Page Template (Advanced)",
        content: [
          "This method integrates your React app seamlessly into WordPress as a page template. It is the most professional approach.",
        ],
        code: `<!-- In your WordPress theme folder, create a file:
     wp-content/themes/yourtheme/page-react-app.php -->

<?php
/**
 * Template Name: React App
 */

// Get the header
get_header();
?>

<!-- Your React app container -->
<div id="root"></div>

<!-- Load React assets -->
<link rel="stylesheet"
      href="<?php echo get_stylesheet_directory_uri(); ?>/react-app/assets/index.css">
<script type="module"
        src="<?php echo get_stylesheet_directory_uri(); ?>/react-app/assets/index.js">
</script>

<?php
// Get the footer
get_footer();
?>`,
      },
      {
        heading: "Method C: Steps",
        content: [
          "Follow these steps to set up the custom page template:",
        ],
        list: [
          "1. Upload your dist/assets files to wp-content/themes/yourtheme/react-app/assets/",
          "2. Create the page-react-app.php template file shown above in your theme folder",
          "3. In WordPress admin, go to Pages > Add New",
          "4. In the Page Attributes panel, set Template to 'React App'",
          "5. Publish the page",
          "6. Visit the page — your React app loads within the WordPress theme structure",
        ],
      },
      {
        heading: "WordPress: Handling React Router (Advanced)",
        content: [
          "If your React app uses React Router (like this site does), WordPress may return 404 for sub-routes. You need a rewrite rule so all paths go to index.html.",
        ],
        code: `<!-- Add to your .htaccess file in the app subdirectory -->

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /app/
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /app/index.html [L]
</IfModule>`,
      },
      {
        heading: "WordPress SEO Optimization (Advanced)",
        content: [
          "To make your React site discoverable by search engines within WordPress:",
        ],
        list: [
          "Install the Yoast SEO or Rank Math plugin",
          "Set a focus keyword for each page that embeds your React app",
          "Add an XML sitemap (Yoast generates this automatically)",
          "Submit your sitemap to Google Search Console",
          "Add Open Graph tags in your page template for social sharing",
          "Use the 'Custom HTML' block to add schema markup (JSON-LD) for structured data",
          "Set canonical URLs to avoid duplicate content issues",
        ],
      },
      {
        heading: "Part 3: Deploying on Google Blogger — Beginner Level",
        content: [
          "Google Blogger (blogspot.com) is a free blogging platform. While it is not designed for React apps, you can still embed your site using HTML/JavaScript gadgets and custom themes.",
        ],
      },
      {
        heading: "Method A: Embed React App in a Blogger Post or Page (Easiest)",
        content: [
          "This method works if you want your React site to appear as a blog post or static page.",
        ],
        list: [
          "1. Go to blogger.com and sign in with your Google account",
          "2. Click 'Create New Blog' or select an existing blog",
          "3. Click 'New Post' or create a new Page",
          "4. Switch to HTML view (click the pencil icon > HTML view)",
          "5. Host your CSS and JS files on a CDN (GitHub Pages, jsDelivr, or Google Drive)",
          "6. Paste your index.html content, with updated asset URLs pointing to the CDN",
          "7. Click Publish",
          "8. View your blog post to verify the React app loads",
        ],
      },
      {
        heading: "Method A: Hosting Assets on GitHub Pages for Blogger",
        content: [
          "GitHub Pages is a free way to host your static assets. Here is how to set it up.",
        ],
        list: [
          "1. Create a new repository on GitHub (e.g., my-app-assets)",
          "2. Upload all files from your dist folder to this repository",
          "3. Go to Settings > Pages > Source > Deploy from branch > main",
          "4. Wait a few minutes — GitHub will publish your files",
          "5. Your files will be available at https://yourusername.github.io/my-app-assets/",
          "6. Use this URL as the base for your CSS and JS links in Blogger",
        ],
        code: `<!-- In Blogger HTML view, paste this -->
<div id="root"></div>
<link rel="stylesheet"
      href="https://yourusername.github.io/my-app-assets/assets/index-abc123.css">
<script type="module"
        src="https://yourusername.github.io/my-app-assets/assets/index-abc123.js">
</script>`,
      },
      {
        heading: "Method A: Using jsDelivr CDN as an Alternative",
        content: [
          "jsDelivr is a free CDN that can serve files directly from GitHub. This is often faster than GitHub Pages.",
        ],
        code: `<!-- jsDelivr URL format:
     https://cdn.jsdelivr.net/gh/USERNAME/REPO@BRANCH/FILE_PATH -->

<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/yourusername/my-app-assets@main/assets/index-abc123.css">
<script type="module"
        src="https://cdn.jsdelivr.net/gh/yourusername/my-app-assets@main/assets/index-abc123.js">
</script>`,
      },
      {
        heading: "Method B: Use Blogger Custom Theme (Intermediate)",
        content: [
          "You can replace the entire Blogger theme with your React app. This gives a seamless experience.",
        ],
        list: [
          "1. In Blogger, go to Theme > Edit HTML",
          "2. Backup your current theme first (Theme > Backup > Download)",
          "3. Delete all existing HTML in the editor",
          "4. Paste your modified index.html content with CDN-hosted assets",
          "5. Add the Blogger-required XML namespace to the <html> tag",
          "6. Click Save",
          "7. Visit your blog URL — your React app loads as the full site",
        ],
      },
      {
        heading: "Method B: Blogger Theme HTML Template",
        content: [
          "Blogger requires specific XML namespaces in the theme. Here is a minimal template that loads your React app.",
        ],
        code: `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:version='2' class='v2'
      xmlns='http://www.w3.org/1999/xhtml'
      xmlns:b='http://www.google.com/2005/gml/b'
      xmlns:data='http://www.google.com/2005/gml/data'
      xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>My Website</title>
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/yourusername/my-app-assets@main/assets/index.css">
  <b:skin><![CDATA[
    /* Blogger requires this section, can be empty */
  ]]></b:skin>
</head>
<body>
  <div id="root"></div>
  <b:section id='main' showaddelement='no' />
  <script type="module"
          src="https://cdn.jsdelivr.net/gh/yourusername/my-app-assets@main/assets/index.js">
  </script>
</body>
</html>`,
      },
      {
        heading: "Blogger: Handling React Router Routes",
        content: [
          "Blogger does not support server-side rewrite rules like WordPress. For React Router, use HashRouter instead of BrowserRouter so all routing happens client-side via URL fragments (#).",
        ],
        code: `// In your React App.tsx, change BrowserRouter to HashRouter
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/tutorials/:id" element={<TutorialDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}`,
      },
      {
        heading: "Blogger: Custom Domain Setup (Advanced)",
        content: [
          "You can use your own domain name with Blogger instead of the default blogspot.com URL.",
        ],
        list: [
          "1. Purchase a domain from a registrar (Namecheap, GoDaddy, Google Domains)",
          "2. In Blogger, go to Settings > Custom Domain > Enter your domain",
          "3. Blogger will show you DNS records to add (CNAME records)",
          "4. Log in to your domain registrar's DNS settings",
          "5. Add the CNAME records as specified by Blogger",
          "6. Wait for DNS to propagate (can take up to 48 hours, usually faster)",
          "7. Enable HTTPS in Blogger Settings > HTTPS > Enable HTTPS",
          "8. Set up redirects: Settings > HTTPS > Always use HTTPS",
        ],
      },
      {
        heading: "Part 4: Advanced Deployment — Professional Level",
        content: [
          "For a truly professional deployment, consider these advanced techniques that work with both WordPress and Blogger.",
        ],
      },
      {
        heading: "Performance Optimization",
        content: [
          "Make your site load faster with these optimizations:",
        ],
        list: [
          "Enable Gzip/Brotli compression on your hosting server (WordPress: use a caching plugin like W3 Total Cache or WP Rocket)",
          "Minify CSS and JavaScript — Vite does this automatically during build",
          "Use lazy loading for React components: React.lazy() and Suspense",
          "Optimize images — compress and use WebP format, use the Pexels CDN for stock photos",
          "Set cache headers for static assets so browsers cache them",
          "Use a CDN like Cloudflare in front of your WordPress or Blogger site",
          "Preload critical resources with <link rel='preload'> tags",
        ],
        code: `<!-- Preload critical assets in your HTML head -->
<link rel="preload"
      href="https://cdn.jsdelivr.net/gh/yourusername/my-app-assets@main/assets/index.css"
      as="style">
<link rel="preload"
      href="https://cdn.jsdelivr.net/gh/yourusername/my-app-assets@main/assets/index.js"
      as="script">`,
      },
      {
        heading: "Analytics and Tracking (Advanced)",
        content: [
          "Track visitor behavior on your deployed site:",
        ],
        list: [
          "Google Analytics 4: Create a property at analytics.google.com, add the tracking code to your index.html or WordPress/Blogger theme",
          "Google Search Console: Verify your domain ownership and submit your sitemap",
          "Hotjar or Microsoft Clarity: for heatmaps and session recordings",
          "For WordPress: use the MonsterInsights plugin for easy GA4 integration",
          "For Blogger: paste the GA4 tracking code directly in Theme > Edit HTML, before </head>",
        ],
        code: `<!-- Google Analytics 4 tracking code -->
<!-- Add before </head> in your HTML -->
<script async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>`,
      },
      {
        heading: "Deployment Checklist",
        content: [
          "Before you go live, verify each item:",
        ],
        table: {
          headers: ["Check", "Why It Matters", "Status"],
          rows: [
            ["All asset paths are correct URLs", "Broken paths = blank page", "Verify"],
            ["Site loads on mobile devices", "60%+ of traffic is mobile", "Verify"],
            ["React Router works (test all routes)", "Broken routes = bad UX", "Verify"],
            ["HTTPS is enabled", "Security and SEO", "Verify"],
            ["Custom domain is configured", "Professional branding", "Verify"],
            ["SEO meta tags are set", "Search engine visibility", "Verify"],
            ["Analytics tracking is installed", "Measure visitor behavior", "Verify"],
            ["Page load time < 3 seconds", "User experience and SEO", "Verify"],
            ["Favicon is set", "Brand recognition in browser tabs", "Verify"],
            ["404 page works gracefully", "Prevent user frustration", "Verify"],
          ],
        },
      },
      {
        heading: "Troubleshooting Common Issues",
        content: [
          "If something goes wrong, check these common problems:",
        ],
        table: {
          headers: ["Problem", "Cause", "Solution"],
          rows: [
            ["Blank white page", "Asset paths are wrong", "Check browser console for 404 errors, fix paths to absolute URLs"],
            ["CSS not loading", "Relative path used on different domain", "Use full URLs (https://...) for all CSS/JS links"],
            ["Router 404 on refresh", "Server not redirecting to index.html", "WordPress: add .htaccess rewrite. Blogger: use HashRouter"],
            ["Assets too large", "No code splitting", "Configure Vite manualChunks, use React.lazy()"],
            ["CORS errors", "CDN blocking cross-origin requests", "Use jsDelivr (supports CORS) or same-origin hosting"],
            ["Blogger theme error", "Missing required XML tags", "Ensure b:version, b:skin, and b:section tags are present"],
            ["WordPress custom template not showing", "Theme not activated", "Activate the theme and clear cache"],
          ],
        },
      },
    ],
  },

  {
    id: "advanced-python",
    title: "Advanced Python — Professional Techniques",
    category: "Programming",
    icon: "Code2",
    description: "Master advanced Python concepts used by professional developers — decorators, generators, metaclasses, async, context managers, and design patterns.",
    level: "Advanced",
    estimatedTime: "60 min read",
    sections: [
      {
        heading: "1. Decorators — Modifying Function Behavior",
        content: [
          "Decorators are functions that wrap other functions to add behavior without modifying the original function. They are heavily used in web frameworks (Flask, Django), logging, authentication, and more.",
        ],
        code: `# Basic decorator
import functools

def log_execution(func):
    @functools.wraps(func)  # preserves original function metadata
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with args={args}, kwargs={kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

@log_execution
def add(a, b):
    return a + b

add(3, 5)
# Calling add with args=(3, 5), kwargs={}
# add returned 8

# Decorator with arguments
def repeat(times):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            result = None
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hello, {name}!")

greet("Amit")  # prints 3 times

# Class-based decorator
class CountCalls:
    def __init__(self, func):
        functools.update_wrapper(self, func)
        self.func = func
        self.count = 0

    def __call__(self, *args, **kwargs):
        self.count += 1
        print(f"Call {self.count} of {self.func.__name__}")
        return self.func(*args, **kwargs)

@CountCalls
def say_hello():
    print("Hello!")

say_hello()  # Call 1
say_hello()  # Call 2
say_hello()  # Call 3`,
      },
      {
        heading: "2. Generators — Lazy Evaluation",
        content: [
          "Generators produce values one at a time, on demand, using the yield keyword. They are memory-efficient for large datasets because they don't store all values in memory at once.",
        ],
        code: `# Generator function
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

for num in fibonacci(10):
    print(num, end=" ")
# 0 1 1 2 3 5 8 13 21 34

# Generator expression (like list comprehension but lazy)
squares_gen = (x**2 for x in range(1000000))
print(next(squares_gen))  # 0
print(next(squares_gen))  # 1
# Does NOT create a list of 1M items in memory

# Reading large files with generators
def read_large_file(filepath):
    with open(filepath, "r") as f:
        for line in f:
            yield line.strip()

# Process line by line — constant memory
for line in read_large_file("big_data.csv"):
    process(line)

# Infinite generator
def counter(start=0):
    count = start
    while True:
        yield count
        count += 1

c = counter(10)
print(next(c))  # 10
print(next(c))  # 11
print(next(c))  # 12

# Pipeline of generators (data processing)
def numbers():
    for i in range(100):
        yield i

def evens(gen):
    for n in gen:
        if n % 2 == 0:
            yield n

def squared(gen):
    for n in gen:
        yield n ** 2

# Chain generators — each processes one item at a time
pipeline = squared(evens(numbers()))
for val in pipeline:
    if val > 100:
        break
    print(val)`,
      },
      {
        heading: "3. Context Managers — Resource Management",
        content: [
          "Context managers ensure resources are properly cleaned up using the with statement. They are essential for file handling, database connections, and locks.",
        ],
        code: `# Using the contextlib decorator
from contextlib import contextmanager
import time

@contextmanager
def timer(label):
    start = time.time()
    try:
        yield  # code inside 'with' runs here
    finally:
        elapsed = time.time() - start
        print(f"{label}: {elapsed:.4f}s")

with timer("Data processing"):
    # Simulate work
    total = sum(x**2 for x in range(1000000))
    print(f"Result: {total}")

# Custom context manager class
class DatabaseConnection:
    def __init__(self, connection_string):
        self.conn_str = connection_string
        self.conn = None

    def __enter__(self):
        print("Opening database connection...")
        self.conn = f"Connection({self.conn_str})"
        return self.conn

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Closing database connection...")
        self.conn = None
        if exc_type:
            print(f"Error occurred: {exc_val}")
        return False  # don't suppress exceptions

with DatabaseConnection("postgresql://localhost/mydb") as conn:
    print(f"Using {conn}")
    # Do database operations`,
      },
      {
        heading: "4. Async / Await — Asynchronous Programming",
        content: [
          "Async programming allows concurrent operations without threads. It is essential for I/O-bound tasks like API calls, web scraping, and database operations.",
        ],
        code: `import asyncio
import aiohttp

# Basic async function
async def fetch_data(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.json()

# Run multiple requests concurrently
async def fetch_all(urls):
    tasks = [fetch_data(url) for url in urls]
    results = await asyncio.gather(*tasks)
    return results

urls = [
    "https://api.example.com/data1",
    "https://api.example.com/data2",
    "https://api.example.com/data3",
]

# Run the async event loop
results = asyncio.run(fetch_all(urls))
# All 3 requests run concurrently — much faster than sequential

# Async with rate limiting
async def fetch_with_delay(url, delay=1):
    await asyncio.sleep(delay)
    return await fetch_data(url)

# Producer-consumer pattern
async def producer(queue, items):
    for item in items:
        await queue.put(item)
        print(f"Produced: {item}")
    await queue.put(None)  # sentinel

async def consumer(queue):
    while True:
        item = await queue.get()
        if item is None:
            break
        print(f"Consumed: {item}")
        queue.task_done()

async def main():
    queue = asyncio.Queue(maxsize=5)
    await asyncio.gather(
        producer(queue, range(10)),
        consumer(queue)
    )

asyncio.run(main())`,
      },
      {
        heading: "5. Metaclasses — Customizing Class Creation",
        content: [
          "Metaclasses are classes that create classes. They allow you to customize how classes are defined — useful for frameworks, ORM patterns, and plugin systems.",
        ],
        code: `# Metaclass that enforces a naming convention
class CamelCaseMeta(type):
    def __new__(mcs, name, bases, namespace):
        # Check that all method names are lowercase
        for attr in namespace:
            if callable(namespace[attr]) and not attr.startswith('__'):
                if attr != attr.lower():
                    raise ValueError(f"Method '{attr}' must be lowercase")
        return super().__new__(mcs, name, bases, namespace)

class MyAPI(metaclass=CamelCaseMeta):
    def get_data(self):     # OK
        return "data"

    # def GetData(self):    # ValueError: Method 'GetData' must be lowercase

# Metaclass for automatic registration (plugin pattern)
class PluginMeta(type):
    registry = {}

    def __new__(mcs, name, bases, namespace):
        cls = super().__new__(mcs, name, bases, namespace)
        if bases:  # skip base class
            PluginMeta.registry[name.lower()] = cls
        return cls

class Plugin(metaclass=PluginMeta):
    pass

class CSVLoader(Plugin):
    def load(self):
        return "CSV data"

class JSONLoader(Plugin):
    def load(self):
        return "JSON data"

print(PluginMeta.registry)
# {'csvloader': <class CSVLoader>, 'jsonloader': <class JSONLoader>}

# Use the registry
loader = PluginMeta.registry['csvloader']()
print(loader.load())  # CSV data`,
      },
      {
        heading: "6. Type Hinting and Data Validation",
        content: [
          "Modern Python uses type hints extensively. Combined with Pydantic, you get runtime validation — essential for APIs and data pipelines.",
        ],
        code: `from pydantic import BaseModel, validator, Field
from typing import List, Optional

class User(BaseModel):
    id: int
    name: str = Field(..., min_length=2, max_length=50)
    email: str
    age: int = Field(..., gt=0, lt=150)
    skills: List[str] = []
    address: Optional[str] = None

    @validator('email')
    def validate_email(cls, v):
        if '@' not in v:
            raise ValueError('Invalid email')
        return v.lower()

# Creating a user — automatically validated
user = User(id=1, name="Amit", email="AMIT@Example.com", age=25, skills=["Python"])
print(user.email)  # amit@example.com (lowercased by validator)

# Invalid data raises an error
try:
    bad_user = User(id=2, name="X", email="bad", age=200)
except Exception as e:
    print(e)
    # 2 validation errors for User

# Serialize to dict / JSON
print(user.dict())
print(user.json())`,
      },
      {
        heading: "7. Design Patterns in Python",
        content: [
          "Design patterns are proven solutions to common problems. Here are the most useful ones for data professionals.",
        ],
        code: `# Singleton — only one instance exists
class Database:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.connection = "connected"
        return cls._instance

db1 = Database()
db2 = Database()
print(db1 is db2)  # True — same instance

# Factory — create objects without specifying exact class
class DataProcessor:
    @staticmethod
    def create(type_):
        if type_ == "csv":
            return CSVProcessor()
        elif type_ == "json":
            return JSONProcessor()
        elif type_ == "xml":
            return XMLProcessor()
        raise ValueError(f"Unknown type: {type_}")

# Strategy — interchangeable algorithms
from abc import ABC, abstractmethod

class SortStrategy(ABC):
    @abstractmethod
    def sort(self, data):
        pass

class QuickSort(SortStrategy):
    def sort(self, data):
        return sorted(data)  # simplified

class MergeSort(SortStrategy):
    def sort(self, data):
        return sorted(data, reverse=True)

class DataAnalyzer:
    def __init__(self, strategy: SortStrategy):
        self.strategy = strategy

    def analyze(self, data):
        return self.strategy.sort(data)`,
      },
      {
        heading: "8. Performance Profiling and Optimization",
        content: [
          "Professional Python code is measured and optimized. Use these tools to find and fix bottlenecks.",
        ],
        code: `import timeit
import cProfile
import functools

# Time a snippet
time = timeit.timeit(
    '[x**2 for x in range(1000)]',
    number=10000
)
print(f"List comprehension: {time:.4f}s")

# Profile a function
def expensive_function():
    return sum(x**2 for x in range(1000000))

cProfile.run('expensive_function()')

# Memoization with lru_cache
from functools import lru_cache

@lru_cache(maxsize=128)
def expensive_computation(n):
    # Simulate expensive operation
    result = sum(i**2 for i in range(n))
    return result

# First call — computes and caches
print(expensive_computation(10000))
# Second call — instant (from cache)
print(expensive_computation(10000))

# Numba for numerical speedup
from numba import jit
import numpy as np

@jit(nopython=True)
def fast_matrix_multiply(a, b):
    return np.dot(a, b)`,
      },
    ],
  },

  {
    id: "advanced-sql",
    title: "Advanced SQL — Professional Analytics",
    category: "Databases",
    icon: "Database",
    description: "Master advanced SQL techniques used by professional data analysts — complex window functions, query optimization, pivoting, recursive queries, and performance tuning.",
    level: "Advanced",
    estimatedTime: "55 min read",
    sections: [
      {
        heading: "1. Advanced Window Functions",
        content: [
          "Window functions are the most powerful SQL feature for analytics. Beyond the basics, these patterns solve complex ranking, comparison, and aggregation problems.",
        ],
        code: `-- Running total with partition reset
SELECT
    date, department, sales,
    SUM(sales) OVER (
        PARTITION BY department
        ORDER BY date
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) as running_total,
    -- Percent of department total
    sales / SUM(sales) OVER (PARTITION BY department) as pct_of_dept,
    -- Rank within department by date
    RANK() OVER (PARTITION BY department ORDER BY sales DESC) as dept_rank
FROM daily_sales
ORDER BY department, date;

-- Year-over-year and month-over-month comparisons
SELECT
    date,
    revenue,
    -- Same period last year
    LAG(revenue, 365) OVER (ORDER BY date) as revenue_last_year,
    -- Month-over-month growth
    (revenue - LAG(revenue, 1) OVER (ORDER BY date))
        / LAG(revenue, 1) OVER (ORDER BY date) * 100 as mom_growth_pct,
    -- 7-day moving average
    AVG(revenue) OVER (
        ORDER BY date
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) as rolling_7day_avg,
    -- Cumulative distribution
    CUME_DIST() OVER (ORDER BY revenue) as cumulative_pct,
    -- NTile — divide into 4 quartiles
    NTILE(4) OVER (ORDER BY revenue) as quartile
FROM daily_revenue;

-- First and last value with proper window frame
SELECT
    department,
    employee_name,
    salary,
    FIRST_VALUE(employee_name) OVER w as highest_paid,
    LAST_VALUE(employee_name) OVER w as lowest_paid,
    -- Ratio to department average
    salary / AVG(salary) OVER w as ratio_to_avg
FROM employees
WINDOW w AS (
    PARTITION BY department
    ORDER BY salary DESC
    ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
);`,
      },
      {
        heading: "2. PIVOT and UNPIVOT",
        content: [
          "Pivoting transforms rows into columns, and unpivoting does the reverse. These are essential for reporting and reshaping data.",
        ],
        code: `-- PIVOT: Convert rows to columns (SQL Server / PostgreSQL)
-- Before: monthly sales as rows
-- After:  one row per product, columns for each month

-- PostgreSQL crosstab approach
SELECT *
FROM crosstab(
    'SELECT product, month, sales
     FROM monthly_sales
     ORDER BY product, month'
) AS ct(product TEXT, jan INT, feb INT, mar INT, apr INT);

-- Standard SQL approach with conditional aggregation
SELECT
    product,
    SUM(CASE WHEN month = 'Jan' THEN sales ELSE 0 END) as jan_sales,
    SUM(CASE WHEN month = 'Feb' THEN sales ELSE 0 END) as feb_sales,
    SUM(CASE WHEN month = 'Mar' THEN sales ELSE 0 END) as mar_sales,
    SUM(CASE WHEN month = 'Apr' THEN sales ELSE 0 END) as apr_sales,
    SUM(sales) as total_sales
FROM monthly_sales
GROUP BY product
ORDER BY total_sales DESC;

-- UNPIVOT: Convert columns to rows
-- Before: one row with jan, feb, mar, apr columns
-- After:  one row per month

SELECT product, 'Jan' as month, jan_sales as sales FROM product_sales
UNION ALL
SELECT product, 'Feb' as month, feb_sales as sales FROM product_sales
UNION ALL
SELECT product, 'Mar' as month, mar_sales as sales FROM product_sales
UNION ALL
SELECT product, 'Apr' as month, apr_sales as sales FROM product_sales
ORDER BY product, month;`,
      },
      {
        heading: "3. Recursive CTEs — Hierarchical Data",
        content: [
          "Recursive CTEs are essential for organizational charts, bill of materials, category trees, and any hierarchical data.",
        ],
        code: `-- Organizational hierarchy with levels
WITH RECURSIVE org_tree AS (
    -- Base case: top-level managers
    SELECT
        id, name, manager_id, department,
        1 as level,
        name::VARCHAR(1000) as hierarchy_path,
        0 as total_reports
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive case: direct reports
    SELECT
        e.id, e.name, e.manager_id, e.department,
        ot.level + 1,
        ot.hierarchy_path || ' > ' || e.name,
        0
    FROM employees e
    INNER JOIN org_tree ot ON e.manager_id = ot.id
)
SELECT
    REPEAT('  ', level - 1) || name as indented_name,
    level,
    hierarchy_path,
    hierarchy_path
FROM org_tree
ORDER BY hierarchy_path;

-- Bill of materials — calculating total cost
WITH RECURSIVE bom AS (
    -- Base: top-level product
    SELECT
        product_id, product_name,
        1 as quantity,
        unit_cost,
        unit_cost as total_cost,
        product_name::VARCHAR(1000) as component_path
    FROM products
    WHERE product_id = 100  -- the product we are building

    UNION ALL

    -- Recursive: components of components
    SELECT
        c.component_id,
        p.product_name,
        b.quantity * c.quantity,
        p.unit_cost,
        b.total_cost + (b.quantity * c.quantity * p.unit_cost),
        b.component_path || ' > ' || p.product_name
    FROM bom b
    JOIN components c ON b.product_id = c.parent_id
    JOIN products p ON c.component_id = p.product_id
)
SELECT * FROM bom ORDER BY component_path;`,
      },
      {
        heading: "4. Query Optimization Techniques",
        content: [
          "Slow queries are the most common performance problem. Here is how to identify and fix them.",
        ],
        code: `-- Use EXPLAIN ANALYZE to see the execution plan
EXPLAIN ANALYZE
SELECT * FROM orders o
JOIN customers c ON o.customer_id = c.id
WHERE o.order_date >= '2026-01-01';

-- Common optimizations:

-- 1. Avoid SELECT * — only select needed columns
-- Bad:  SELECT * FROM orders;
-- Good: SELECT order_id, customer_id, total FROM orders;

-- 2. Use covering indexes
CREATE INDEX idx_orders_covering
ON orders (customer_id, order_date)
INCLUDE (total, status);

-- 3. Use EXISTS instead of IN for subqueries
-- Bad (slow for large lists):
SELECT * FROM orders
WHERE customer_id IN (SELECT id FROM customers WHERE country = 'India');

-- Good (stops at first match):
SELECT * FROM orders o
WHERE EXISTS (
    SELECT 1 FROM customers c
    WHERE c.id = o.customer_id AND c.country = 'India'
);

-- 4. Use UNION ALL instead of UNION (when no duplicates)
-- UNION removes duplicates (expensive sort)
-- UNION ALL does not (faster)
SELECT name FROM customers WHERE country = 'India'
UNION ALL
SELECT name FROM suppliers WHERE country = 'India';

-- 5. Partition large tables
CREATE TABLE orders (
    order_id BIGINT,
    order_date DATE,
    customer_id BIGINT,
    total DECIMAL(10,2)
) PARTITION BY RANGE (order_date);

CREATE TABLE orders_2026_q1
    PARTITION OF orders
    FOR VALUES FROM ('2026-01-01') TO ('2026-04-01');

CREATE TABLE orders_2026_q2
    PARTITION OF orders
    FOR VALUES FROM ('2026-04-01') TO ('2026-07-01');

-- 6. Use materialized views for expensive aggregations
CREATE MATERIALIZED VIEW daily_sales_summary AS
SELECT
    date,
    COUNT(*) as order_count,
    SUM(total) as total_revenue,
    AVG(total) as avg_order_value
FROM orders
GROUP BY date;

-- Refresh periodically
REFRESH MATERIALIZED VIEW daily_sales_summary;`,
      },
      {
        heading: "5. Advanced Aggregation Patterns",
        content: [
          "Professional reporting requires complex aggregations — here are the patterns that solve real business questions.",
        ],
        code: `-- Rollup: hierarchical subtotals
SELECT
    COALESCE(country, 'All Countries') as country,
    COALESCE(region, 'All Regions') as region,
    COALESCE(product, 'All Products') as product,
    SUM(sales) as total_sales
FROM sales_data
GROUP BY ROLLUP (country, region, product);
-- Produces subtotals at each level + grand total

-- Cube: all possible subtotal combinations
SELECT
    COALESCE(country, 'All') as country,
    COALESCE(region, 'All') as region,
    SUM(sales) as total
FROM sales_data
GROUP BY CUBE (country, region);
-- Produces subtotals for every combination

-- Grouping sets: specify exact combinations
SELECT
    COALESCE(country, 'All') as country,
    COALESCE(product, 'All') as product,
    SUM(sales) as total
FROM sales_data
GROUP BY GROUPING SETS (
    (country, product),
    (country),
    (product),
    ()
);

-- Cohort analysis with window functions
WITH user_purchases AS (
    SELECT
        user_id,
        DATE_TRUNC('month', first_purchase_date) as cohort_month,
        DATE_TRUNC('month', purchase_date) as purchase_month,
        COUNT(*) as purchase_count
    FROM (
        SELECT
            user_id,
            purchase_date,
            MIN(purchase_date) OVER (PARTITION BY user_id) as first_purchase_date
        FROM orders
    ) x
    GROUP BY user_id, first_purchase_date, purchase_date
)
SELECT
    cohort_month,
    purchase_month,
    AGE(purchase_month, cohort_month) as months_since_first,
    COUNT(DISTINCT user_id) as active_users
FROM user_purchases
GROUP BY cohort_month, purchase_month
ORDER BY cohort_month, months_since_first;`,
      },
      {
        heading: "6. JSON and Array Operations (PostgreSQL)",
        content: [
          "Modern databases support JSON and array columns. These are essential for working with semi-structured data and API responses.",
        ],
        code: `-- JSON column operations
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    event_type TEXT,
    event_data JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Insert JSON data
INSERT INTO events (event_type, event_data) VALUES
('purchase', '{"product": "laptop", "price": 999.99, "qty": 1}'),
('view', '{"page": "/home", "duration": 45}'),
('purchase', '{"product": "mouse", "price": 29.99, "qty": 3}');

-- Query JSON fields
SELECT
    event_data->>'product' as product,
    (event_data->>'price')::DECIMAL as price,
    (event_data->>'qty')::INT as quantity
FROM events
WHERE event_type = 'purchase';

-- JSON aggregation — combine rows into JSON
SELECT
    json_agg(
        json_build_object(
            'product', event_data->>'product',
            'price', event_data->>'price'
        )
    ) as purchases
FROM events
WHERE event_type = 'purchase';

-- Array operations
SELECT
    ARRAY_AGG(product_name ORDER BY price DESC) as top_products,
    ARRAY_LENGTH(ARRAY_AGG(product_name), 1) as product_count
FROM products;

-- Unnest array into rows
SELECT unnest(ARRAY['apple', 'banana', 'cherry']) as fruit;`,
      },
      {
        heading: "7. Performance Tuning Checklist",
        content: [
          "Use this checklist to systematically improve query performance.",
        ],
        table: {
          headers: ["Technique", "Impact", "When to Use"],
          rows: [
            ["Add indexes on JOIN/WHERE columns", "High", "Frequently filtered or joined columns"],
            ["Use covering indexes (INCLUDE)", "High", "When query only needs a few columns"],
            ["Partition large tables by date", "High", "Tables with 10M+ rows, time-based queries"],
            ["Materialize expensive views", "High", "Slow aggregations run frequently"],
            ["Avoid SELECT *", "Medium", "Always — select only needed columns"],
            ["Use EXISTS instead of IN", "Medium", "Subquery returns many rows"],
            ["Use UNION ALL instead of UNION", "Medium", "When duplicates are impossible"],
            ["Batch large INSERTs", "Medium", "Loading 1000+ rows"],
            ["Vacuum and analyze tables", "Medium", "After bulk updates (PostgreSQL)"],
            ["Use connection pooling", "High", "Production applications with many connections"],
          ],
        },
      },
    ],
  },

  {
    id: "advanced-pandas",
    title: "Advanced Pandas — Professional Data Engineering",
    category: "Python",
    icon: "Table",
    description: "Master professional Pandas techniques — multi-indexing, method chaining, vectorized operations, memory optimization, custom accessors, and production patterns.",
    level: "Advanced",
    estimatedTime: "55 min read",
    sections: [
      {
        heading: "1. Multi-Index DataFrames",
        content: [
          "Multi-indexing allows hierarchical row and column labels — essential for complex data like panel data, time series with multiple entities, and reshaped data.",
        ],
        code: `import pandas as pd
import numpy as np

# Create multi-index DataFrame
data = {
    ('Mumbai', 'Sales'): [100, 120, 130],
    ('Mumbai', 'Profit'): [20, 25, 28],
    ('Delhi', 'Sales'): [80, 90, 95],
    ('Delhi', 'Profit'): [15, 18, 20],
}
df = pd.DataFrame(data, index=['Jan', 'Feb', 'Mar'])
print(df.columns)
# MultiIndex([('Mumbai', 'Sales'), ('Mumbai', 'Profit'),
#             ('Delhi', 'Sales'), ('Delhi', 'Profit')])

# Select from multi-index
print(df['Mumbai'])               # both Sales and Profit for Mumbai
print(df['Mumbai', 'Sales'])      # only Sales for Mumbai
print(df.xs('Sales', level=1, axis=1))  # Sales for all cities

# Row multi-index
df2 = pd.DataFrame({
    'sales': [100, 120, 80, 90, 130, 95],
}, index=pd.MultiIndex.from_tuples([
    ('Mumbai', 'Jan'), ('Mumbai', 'Feb'),
    ('Delhi', 'Jan'), ('Delhi', 'Feb'),
    ('Pune', 'Jan'), ('Pune', 'Feb'),
], names=['city', 'month']))

# Group by level
print(df2.groupby(level='city').sum())
print(df2.groupby(level=['city', 'month']).mean())

# Unstack — pivot a level to columns
pivoted = df2.unstack(level='month')
#         sales
# month    Feb  Jan
# city
# Delhi     90   80
# Mumbai   120  100
# Pune      95  130`,
      },
      {
        heading: "2. Method Chaining — Clean Data Pipelines",
        content: [
          "Method chaining creates readable, pipe-like data transformations without intermediate variables. This is how professional data engineers write Pandas code.",
        ],
        code: `import pandas as pd

# Without chaining (harder to read, many variables)
df = pd.read_csv('sales.csv')
df = df.dropna(subset=['price'])
df = df[df['price'] > 0]
df['price_category'] = df['price'].apply(lambda x: 'High' if x > 100 else 'Low')
df = df.groupby(['region', 'price_category'])['price'].agg(['mean', 'count'])
df = df.sort_values('mean', ascending=False)
df = df.head(10)

# With method chaining (clean, readable, no intermediate variables)
result = (
    pd.read_csv('sales.csv')
    .dropna(subset=['price'])
    .query('price > 0')
    .assign(price_category=lambda x: np.where(x['price'] > 100, 'High', 'Low'))
    .groupby(['region', 'price_category'])['price']
    .agg(['mean', 'count'])
    .sort_values('mean', ascending=False)
    .head(10)
)

# Using pipe() for custom functions in the chain
def remove_outliers(df, column, n_std=3):
    mean, std = df[column].mean(), df[column].std()
    return df[(df[column] >= mean - n_std * std) &
              (df[column] <= mean + n_std * std)]

def normalize(df, column):
    df = df.copy()
    df[column] = (df[column] - df[column].min()) / (df[column].max() - df[column].min())
    return df

clean_data = (
    pd.read_csv('data.csv')
    .pipe(remove_outliers, 'price', n_std=2)
    .pipe(remove_outliers, 'quantity', n_std=2)
    .pipe(normalize, 'price')
)`,
      },
      {
        heading: "3. Vectorized Operations — Speeding Up Pandas",
        content: [
          "Vectorized operations are 100-1000x faster than loops or apply(). Always prefer vectorized methods.",
        ],
        code: `import pandas as pd
import numpy as np
import time

df = pd.DataFrame({'price': np.random.rand(1_000_000) * 100})

# SLOW: iterrows (loop over rows)
start = time.time()
result = []
for _, row in df.iterrows():
    result.append(row['price'] * 1.1)
result = pd.Series(result)
print(f"iterrows: {time.time() - start:.3f}s")

# FASTER: apply
start = time.time()
result = df['price'].apply(lambda x: x * 1.1)
print(f"apply: {time.time() - start:.3f}s")

# FASTEST: vectorized (numpy)
start = time.time()
result = df['price'] * 1.1
print(f"vectorized: {time.time() - start:.3f}s")

# Vectorized conditional logic with np.select
conditions = [
    df['price'] < 25,
    (df['price'] >= 25) & (df['price'] < 75),
    df['price'] >= 75,
]
choices = ['Low', 'Medium', 'High']
df['category'] = np.select(conditions, choices)

# Vectorized string operations
df['product'] = df['product'].str.upper()
df['has_discount'] = df['description'].str.contains('discount', case=False)
df['word_count'] = df['description'].str.split().str.len()

# Vectorized date operations
df['date'] = pd.to_datetime(df['date'])
df['day_of_week'] = df['date'].dt.day_name()
df['is_weekend'] = df['date'].dt.dayofweek >= 5
df['quarter'] = df['date'].dt.quarter`,
      },
      {
        heading: "4. Memory Optimization",
        content: [
          "Large datasets can exhaust memory. These techniques reduce memory usage by 50-90%.",
        ],
        code: `import pandas as pd

# Check memory usage
df = pd.read_csv('large_file.csv')
print(df.memory_usage(deep=True).sum() / 1e6, 'MB')

# 1. Downcast numeric types
def optimize_dtypes(df):
    # Integers
    int_cols = df.select_dtypes(include=['int64']).columns
    df[int_cols] = df[int_cols].apply(pd.to_numeric, downcast='integer')

    # Floats
    float_cols = df.select_dtypes(include=['float64']).columns
    df[float_cols] = df[float_cols].apply(pd.to_numeric, downcast='float')

    return df

df = optimize_dtypes(df)
print(df.memory_usage(deep=True).sum() / 1e6, 'MB (optimized)')

# 2. Convert strings to categories
for col in ['country', 'product_category', 'status']:
    df[col] = df[col].astype('category')
# category type uses 1-2 bytes per value vs 50+ bytes for strings

# 3. Read only needed columns
df = pd.read_csv('large_file.csv', usecols=['date', 'price', 'quantity'])

# 4. Specify dtypes on read
dtypes = {
    'id': 'int32',
    'price': 'float32',
    'quantity': 'int16',
    'category': 'category',
}
df = pd.read_csv('data.csv', dtype=dtypes, parse_dates=['date'])

# 5. Read in chunks for very large files
chunks = pd.read_csv('huge_file.csv', chunksize=100_000)
results = []
for chunk in chunks:
    result = chunk.groupby('category')['price'].sum()
    results.append(result)
total = pd.concat(results).groupby(level=0).sum()`,
      },
      {
        heading: "5. Advanced Merging and Joining",
        content: [
          "Real-world data comes from multiple sources. Master these merge patterns to combine data correctly.",
        ],
        code: `import pandas as pd

customers = pd.DataFrame({
    'customer_id': [1, 2, 3, 4],
    'name': ['Amit', 'Priya', 'Raj', 'Sneha'],
    'city': ['Mumbai', 'Delhi', 'Pune', 'Bangalore']
})

orders = pd.DataFrame({
    'order_id': [101, 102, 103, 104, 105],
    'customer_id': [1, 2, 2, 3, 5],  # customer 5 doesn't exist
    'amount': [100, 200, 150, 300, 50]
})

# Inner merge — only matching rows
inner = customers.merge(orders, on='customer_id', how='inner')

# Left merge — all customers, with nulls for no orders
left = customers.merge(orders, on='customer_id', how='left')

# Full outer merge — all rows from both, nulls where no match
outer = customers.merge(orders, on='customer_id', how='outer',
                        indicator=True)
# indicator adds a '_merge' column: left_only, right_only, both

# Merge with different column names
df1 = pd.DataFrame({'id': [1, 2], 'name': ['A', 'B']})
df2 = pd.DataFrame({'user_id': [1, 2], 'email': ['a@x.com', 'b@x.com']})
merged = df1.merge(df2, left_on='id', right_on='user_id')

# Merge on multiple columns
merged = sales.merge(targets, on=['region', 'quarter'])

# Cross join — every combination (use with caution, can be huge)
cross = customers.merge(orders, how='cross')

# As-of merge — merge with nearest key (time series)
trades = pd.DataFrame({
    'time': pd.to_datetime(['10:00', '10:05', '10:10']),
    'price': [100, 102, 101]
})
quotes = pd.DataFrame({
    'time': pd.to_datetime(['10:00', '10:07', '10:12']),
    'bid': [99, 101, 100]
})
# Match each trade to the most recent quote
result = pd.merge_asof(
    trades.sort_values('time'),
    quotes.sort_values('time'),
    on='time',
    direction='backward'
)`,
      },
      {
        heading: "6. Time Series Analysis",
        content: [
          "Pandas has powerful time series capabilities — essential for financial data, sales forecasting, and trend analysis.",
        ],
        code: `import pandas as pd
import numpy as np

# Create time series data
dates = pd.date_range('2026-01-01', periods=365, freq='D')
ts = pd.DataFrame({
    'date': dates,
    'sales': np.random.randn(365).cumsum() + 100
}).set_index('date')

# Resampling — change frequency
daily_to_weekly = ts.resample('W').sum()
daily_to_monthly = ts.resample('M').agg(['mean', 'sum', 'min', 'max'])
daily_to_quarterly = ts.resample('Q').mean()

# Rolling window calculations
ts['rolling_mean_7'] = ts['sales'].rolling(window=7).mean()
ts['rolling_std_30'] = ts['sales'].rolling(window=30).std()
ts['ewm_mean'] = ts['sales'].ewm(span=7).mean()  # exponentially weighted

# Shifting — lag and lead
ts['prev_day'] = ts['sales'].shift(1)
ts['next_day'] = ts['sales'].shift(-1)
ts['pct_change'] = ts['sales'].pct_change()
ts['diff_7'] = ts['sales'].diff(7)  # difference from 7 days ago

# Time-based indexing and slicing
jan_data = ts.loc['2026-01']
q1_data = ts.loc['2026-01':'2026-03']

# Decomposition (trend + seasonality + residual)
from statsmodels.tsa.seasonal import seasonal_decompose
decomposition = seasonal_decompose(ts['sales'], model='additive', period=7)
trend = decomposition.trend
seasonal = decomposition.seasonal
residual = decomposition.resid

# Business day frequency
bday = pd.date_range('2026-01-01', periods=30, freq='B')  # B = business day`,
      },
      {
        heading: "7. Production Patterns — Testing and Reproducibility",
        content: [
          "Professional Pandas code is tested, documented, and reproducible. Here are the patterns that make it production-ready.",
        ],
        code: `import pandas as pd
import pytest

# Create test fixtures
@pytest.fixture
def sample_data():
    return pd.DataFrame({
        'product': ['A', 'B', 'C', 'A', 'B'],
        'price': [10, 20, 30, 15, 25],
        'quantity': [2, 1, 3, 5, 2],
    })

def test_total_revenue(sample_data):
    result = (sample_data
              .assign(revenue=lambda x: x['price'] * x['quantity'])
              .groupby('product')['revenue']
              .sum())
    assert result['A'] == 95  # 10*2 + 15*5
    assert result['B'] == 70  # 20*1 + 25*2
    assert result['C'] == 90  # 30*3

def test_no_nulls_after_cleaning(sample_data):
    cleaned = sample_data.dropna()
    assert cleaned.isnull().sum().sum() == 0

# Reproducible random operations
np.random.seed(42)  # set seed at the start
sample = df.sample(n=100, random_state=42)

# Save and load DataFrames reliably
df.to_parquet('data.parquet')  # preserves dtypes, smaller than CSV
df_loaded = pd.read_parquet('data.parquet')
assert df.equals(df_loaded)  # exact match

# Logging for data pipelines
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def process_data(filepath):
    logger.info(f"Reading {filepath}")
    df = pd.read_csv(filepath)
    logger.info(f"Loaded {len(df)} rows")
    df = df.dropna()
    logger.info(f"After cleaning: {len(df)} rows")
    return df`,
      },
    ],
  },

  {
    id: "advanced-statistics",
    title: "Advanced Statistics for Data Analysts",
    category: "Data Analytics",
    icon: "BarChart3",
    description: "Master the statistical methods used by senior analysts — A/B testing, regression analysis, Bayesian thinking, time series forecasting, and causal inference.",
    level: "Advanced",
    estimatedTime: "65 min read",
    sections: [
      {
        heading: "1. A/B Testing — End to End",
        content: [
          "A/B testing is the core methodology for data-driven decision making. This section covers the full process from hypothesis to conclusion.",
        ],
        code: `import numpy as np
from scipy import stats

# Define the experiment
# H0: The new design does not change conversion rate
# H1: The new design increases conversion rate

# Data
control_conversions = 1200
control_visitors = 10000
variant_conversions = 1380
variant_visitors = 10000

control_rate = control_conversions / control_visitors  # 12%
variant_rate = variant_conversions / variant_visitors  # 13.8%

# Two-proportion z-test
pooled_rate = (control_conversions + variant_conversions) / (control_visitors + variant_visitors)
se = np.sqrt(pooled_rate * (1 - pooled_rate) * (1/control_visitors + 1/variant_visitors))
z_score = (variant_rate - control_rate) / se
p_value = 1 - stats.norm.cdf(z_score)

print(f"Control rate: {control_rate:.4f}")
print(f"Variant rate: {variant_rate:.4f}")
print(f"Lift: {(variant_rate - control_rate) / control_rate * 100:.1f}%")
print(f"Z-score: {z_score:.4f}")
print(f"P-value: {p_value:.4f}")

if p_value < 0.05:
    print("Result: Statistically significant — ship the new design")
else:
    print("Result: Not significant — keep the current design")

# Power analysis — how many visitors do we need?
from statsmodels.stats.power import NormalIndPower
from statsmodels.stats.proportion import proportion_effectsize

effect_size = proportion_effectsize(0.12, 0.14)  # control, expected variant
power_analysis = NormalIndPower()
sample_size = power_analysis.solve_power(
    effect_size=effect_size,
    alpha=0.05,
    power=0.80,  # 80% chance of detecting the effect
    ratio=1
)
print(f"Required sample size per group: {int(sample_size)}")`,
      },
      {
        heading: "2. Linear and Logistic Regression",
        content: [
          "Regression analysis is the foundation of predictive analytics. Understand both the math and the practical application.",
        ],
        code: `import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.metrics import r2_score, mean_squared_error, accuracy_score
import statsmodels.api as sm

# Linear regression with statsmodels (gives detailed statistics)
data = pd.DataFrame({
    'ad_spend': [100, 200, 300, 400, 500, 600, 700, 800],
    'sales': [50, 95, 130, 180, 210, 260, 290, 340],
})

X = sm.add_constant(data['ad_spend'])
model = sm.OLS(data['sales'], X).fit()
print(model.summary())
# Coefficients, p-values, R-squared, confidence intervals
# Interpretation: for every $1 increase in ad spend,
# sales increase by $0.47 (coefficient), p < 0.001

# Multiple regression with sklearn
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

X = data[['ad_spend', 'seasonality_index', 'competitor_price']]
y = data['sales']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

model = LinearRegression()
model.fit(X_train_scaled, y_train)
predictions = model.predict(X_test_scaled)

print(f"R-squared: {r2_score(y_test, predictions):.4f}")
print(f"RMSE: {np.sqrt(mean_squared_error(y_test, predictions)):.4f}")
print(f"Coefficients: {dict(zip(X.columns, model.coef_))}")

# Logistic regression — for binary outcomes
# Example: predict customer churn (0 = stays, 1 = churns)
churn_data = pd.DataFrame({
    'tenure_months': [12, 24, 6, 36, 18, 48, 3, 8],
    'monthly_charges': [50, 80, 30, 60, 70, 90, 20, 45],
    'churned': [0, 1, 1, 0, 0, 1, 1, 0],
})

X = churn_data[['tenure_months', 'monthly_charges']]
y = churn_data['churned']

log_model = LogisticRegression()
log_model.fit(X, y)

# Predict probability of churn
probabilities = log_model.predict_proba(X)[:, 1]
print(f"Churn probabilities: {probabilities}")
print(f"Coefficients: {dict(zip(X.columns, log_model.coef_[0]))}")
# Negative coefficient for tenure = longer tenure reduces churn probability`,
      },
      {
        heading: "3. Bayesian Thinking",
        content: [
          "Bayesian statistics updates beliefs as new evidence arrives. This approach is increasingly used in modern data analysis.",
        ],
        code: `import numpy as np
from scipy.stats import beta

# Bayesian A/B testing with Beta distribution
# Prior: uniform (Beta(1, 1))
# After observing data: Beta(1 + conversions, 1 + non-conversions)

# Control: 1200 conversions out of 10000
control_alpha = 1 + 1200
control_beta = 1 + (10000 - 1200)

# Variant: 1380 conversions out of 10000
variant_alpha = 1 + 1380
variant_beta = 1 + (10000 - 1380)

# Sample from both distributions to estimate probability variant is better
samples = 100000
control_samples = beta.rvs(control_alpha, control_beta, size=samples)
variant_samples = beta.rvs(variant_alpha, variant_beta, size=samples)

# Probability that variant is better than control
p_variant_better = np.mean(variant_samples > control_samples)
print(f"P(variant > control) = {p_variant_better:.4f}")

# Expected lift
lift = (variant_samples - control_samples) / control_samples
print(f"Expected lift: {np.mean(lift) * 100:.2f}%")
print(f"95% credible interval: [{np.percentile(lift, 2.5) * 100:.2f}%, "
      f"{np.percentile(lift, 97.5) * 100:.2f}%]")

# Bayesian updating — update belief as new data arrives
prior_alpha, prior_beta = 1, 1  # start with uniform prior

# Week 1: 100 conversions out of 800
prior_alpha += 100
prior_beta += 700
print(f"After week 1: Beta({prior_alpha}, {prior_beta})")
print(f"  Mean: {prior_alpha / (prior_alpha + prior_beta):.4f}")

# Week 2: 130 conversions out of 900
prior_alpha += 130
prior_beta += 770
print(f"After week 2: Beta({prior_alpha}, {prior_beta})")
print(f"  Mean: {prior_alpha / (prior_alpha + prior_beta):.4f}")`,
      },
      {
        heading: "4. Time Series Forecasting",
        content: [
          "Forecasting is critical for business planning. Here are practical methods from simple to advanced.",
        ],
        code: `import pandas as pd
import numpy as np
from statsmodels.tsa.arima.model import ARIMA
from statsmodels.tsa.holtwinters import ExponentialSmoothing
from prophet import Prophet  # Facebook's forecasting library

# Create sample time series
dates = pd.date_range('2025-01-01', periods=365, freq='D')
sales = 100 + np.arange(365) * 0.1 + np.sin(np.arange(365) * 2 * np.pi / 7) * 10
ts = pd.DataFrame({'ds': dates, 'y': sales})

# Method 1: Exponential Smoothing (good for trend + seasonality)
model = ExponentialSmoothing(
    ts['y'],
    trend='add',
    seasonal='add',
    seasonal_periods=7
).fit()
forecast = model.forecast(30)  # next 30 days

# Method 2: ARIMA (autoregressive integrated moving average)
arima_model = ARIMA(ts['y'], order=(5, 1, 2)).fit()
arima_forecast = arima_model.forecast(30)

# Method 3: Prophet (handles holidays, changepoints automatically)
prophet_model = Prophet(
    yearly_seasonality=True,
    weekly_seasonality=True,
    daily_seasonality=False
)
prophet_model.fit(ts)
future = prophet_model.make_future_dataframe(periods=30)
prophet_forecast = prophet_model.predict(future)

# Evaluate forecasts with train/test split
train = ts.iloc[:300]
test = ts.iloc[300:]

model = ExponentialSmoothing(
    train['y'], trend='add', seasonal='add', seasonal_periods=7
).fit()
predictions = model.forecast(len(test))

from sklearn.metrics import mean_absolute_error, mean_absolute_percentage_error
mae = mean_absolute_error(test['y'], predictions)
mape = mean_absolute_percentage_error(test['y'], predictions)
print(f"MAE: {mae:.2f}")
print(f"MAPE: {mape * 100:.1f}%")`,
      },
      {
        heading: "5. Causal Inference — Beyond Correlation",
        content: [
          "Correlation does not imply causation. These methods help estimate causal effects from observational data.",
        ],
        code: `import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler

# Difference-in-Differences (DiD)
# Compare the change in a treatment group vs a control group over time
# Example: effect of a price increase on sales

did_data = pd.DataFrame({
    'period': [0, 0, 0, 0, 1, 1, 1, 1],  # 0=before, 1=after
    'treated': [0, 0, 1, 1, 0, 0, 1, 1],  # 0=control, 1=treatment
    'sales': [100, 105, 120, 125, 95, 100, 100, 105],
})

# DiD estimate
before_control = did_data[(did_data['period']==0) & (did_data['treated']==0)]['sales'].mean()
after_control = did_data[(did_data['period']==1) & (did_data['treated']==0)]['sales'].mean()
before_treated = did_data[(did_data['period']==0) & (did_data['treated']==1)]['sales'].mean()
after_treated = did_data[(did_data['period']==1) & (did_data['treated']==1)]['sales'].mean()

control_change = after_control - before_control
treated_change = after_treated - before_treated
did_estimate = treated_change - control_change
print(f"DiD estimate: {did_estimate}")
# Negative means the price increase reduced sales (causal effect)

# Propensity Score Matching
from sklearn.linear_model import LogisticRegression

# Estimate propensity scores (probability of being treated)
features = ['age', 'income', 'previous_purchases']
X = data[features]
treatment = data['received_promotion']

prop_model = LogisticRegression()
prop_model.fit(X, treatment)
propensity_scores = prop_model.predict_proba(X)[:, 1]

# Match treated and control with similar propensity scores
data['propensity'] = propensity_scores
treated = data[data['received_promotion'] == 1]
control = data[data['received_promotion'] == 0]

# For each treated unit, find nearest control by propensity score
from scipy.spatial import KDTree
tree = KDTree(control[['propensity']].values)
_, indices = tree.query(treated[['propensity']].values)
matched_control = control.iloc[indices.flatten()]

# Average Treatment Effect on Treated (ATT)
att = treated['outcome'].mean() - matched_control['outcome'].mean()
print(f"Average Treatment Effect: {att:.4f}")`,
      },
      {
        heading: "6. Choosing the Right Statistical Test",
        content: [
          "Selecting the correct test is critical. Use this reference guide.",
        ],
        table: {
          headers: ["Scenario", "Test", "Python Function"],
          rows: [
            ["Compare means of 2 groups", "t-test", "scipy.stats.ttest_ind()"],
            ["Compare means of 3+ groups", "ANOVA", "scipy.stats.f_oneway()"],
            ["Compare proportions (A/B test)", "z-test", "statsmodels.stats.proportion"],
            ["Test independence of categories", "Chi-square", "scipy.stats.chi2_contingency()"],
            ["Test normality", "Shapiro-Wilk", "scipy.stats.shapiro()"],
            ["Compare distributions", "Kolmogorov-Smirnov", "scipy.stats.ks_2samp()"],
            ["Correlation (continuous)", "Pearson", "scipy.stats.pearsonr()"],
            ["Correlation (ordinal)", "Spearman", "scipy.stats.spearmanr()"],
            ["Non-parametric 2 groups", "Mann-Whitney U", "scipy.stats.mannwhitneyu()"],
            ["Non-parametric 3+ groups", "Kruskal-Wallis", "scipy.stats.kruskal()"],
            ["Paired data", "Paired t-test", "scipy.stats.ttest_rel()"],
            ["Multiple comparisons", "Bonferroni / Tukey", "statsmodels.stats.multicomp"],
          ],
        },
      },
      {
        heading: "7. Common Statistical Mistakes to Avoid",
        content: [
          "Even experienced analysts make these errors. Being aware of them is the difference between amateur and professional.",
        ],
        list: [
          "p-hacking — running many tests until one is significant. Pre-register your hypothesis and test it once.",
          "Ignoring multiple comparison correction — when running many tests, use Bonferroni or FDR correction.",
          "Confusing statistical significance with practical significance — a tiny effect can be statistically significant with a large sample.",
          "Using the wrong test for your data — check assumptions (normality, equal variance, independence) before choosing a test.",
          "Ignoring effect sizes — always report effect sizes alongside p-values to show the magnitude of the effect.",
          "Simpson's paradox — a trend in the overall data can reverse within subgroups. Always check subgroup analysis.",
          "Survivorship bias — only analyzing successful cases leads to biased conclusions. Include failures in your analysis.",
          "Correlation fishing — testing hundreds of variable pairs inflates false positive rate. Use domain knowledge to guide analysis.",
        ],
      },
    ],
  },

  {
    id: "machine-learning-fundamentals",
    title: "Machine Learning Fundamentals for Analysts",
    category: "Data Analytics",
    icon: "Sparkles",
    description: "Bridge from data analysis to machine learning — understand the ML workflow, model selection, evaluation metrics, and when to use ML vs traditional statistics.",
    level: "Advanced",
    estimatedTime: "55 min read",
    sections: [
      {
        heading: "1. The Machine Learning Workflow",
        content: [
          "Machine learning is not magic — it is a structured process. Understanding this workflow is essential before applying any algorithm.",
        ],
        list: [
          "1. Define the problem — classification, regression, or clustering?",
          "2. Collect and prepare data — the most time-consuming step (60-80% of effort)",
          "3. Split data — training set (70-80%), validation set (10-15%), test set (10-15%)",
          "4. Choose a model based on the problem type and data characteristics",
          "5. Train the model on the training set",
          "6. Tune hyperparameters using the validation set",
          "7. Evaluate on the test set (only once, at the end)",
          "8. Deploy the model to production",
          "9. Monitor performance and retrain when needed",
        ],
      },
      {
        heading: "2. Supervised Learning — Classification",
        content: [
          "Classification predicts categorical outcomes. Here are the key algorithms with practical examples.",
        ],
        code: `import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.svm import SVC
from sklearn.metrics import (classification_report, confusion_matrix,
                             accuracy_score, precision_score, recall_score,
                             f1_score, roc_auc_score)

# Load and prepare data
df = pd.read_csv('customer_churn.csv')
X = df.drop('churned', axis=1)
y = df['churned']

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Compare multiple models
models = {
    'Logistic Regression': LogisticRegression(),
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
    'Gradient Boosting': GradientBoostingClassifier(random_state=42),
    'SVM': SVC(probability=True, random_state=42),
}

results = {}
for name, model in models.items():
    model.fit(X_train_scaled, y_train)
    y_pred = model.predict(X_test_scaled)
    y_prob = model.predict_proba(X_test_scaled)[:, 1]

    results[name] = {
        'accuracy': accuracy_score(y_test, y_pred),
        'precision': precision_score(y_test, y_pred),
        'recall': recall_score(y_test, y_pred),
        'f1': f1_score(y_test, y_pred),
        'roc_auc': roc_auc_score(y_test, y_prob),
    }

results_df = pd.DataFrame(results).T
print(results_df)

# Cross-validation for robust evaluation
cv_scores = cross_val_score(
    RandomForestClassifier(n_estimators=100, random_state=42),
    X_train_scaled, y_train, cv=5, scoring='f1'
)
print(f"CV F1: {cv_scores.mean():.4f} (+/- {cv_scores.std():.4f})")`,
      },
      {
        heading: "3. Supervised Learning — Regression",
        content: [
          "Regression predicts continuous values. Understanding regularization is key to avoiding overfitting.",
        ],
        code: `from sklearn.linear_model import LinearRegression, Ridge, Lasso, ElasticNet
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
import numpy as np

# Compare regression models
models = {
    'Linear': LinearRegression(),
    'Ridge (L2)': Ridge(alpha=1.0),
    'Lasso (L1)': Lasso(alpha=0.1),
    'ElasticNet': ElasticNet(alpha=0.1, l1_ratio=0.5),
    'Random Forest': RandomForestRegressor(n_estimators=100, random_state=42),
    'Gradient Boosting': GradientBoostingRegressor(random_state=42),
}

for name, model in models.items():
    model.fit(X_train_scaled, y_train)
    y_pred = model.predict(X_test_scaled)

    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    mae = mean_absolute_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)

    print(f"{name:20s} | RMSE: {rmse:.4f} | MAE: {mae:.4f} | R2: {r2:.4f}")

# Feature importance from Random Forest
rf = RandomForestRegressor(n_estimators=100, random_state=42)
rf.fit(X_train_scaled, y_train)
importance = pd.DataFrame({
    'feature': X.columns,
    'importance': rf.feature_importances_,
}).sort_values('importance', ascending=False)
print(importance.head(10))

# Lasso for feature selection — coefficients become exactly 0
lasso = Lasso(alpha=0.1)
lasso.fit(X_train_scaled, y_train)
selected_features = X.columns[lasso.coef_ != 0]
print(f"Selected features: {list(selected_features)}")`,
      },
      {
        heading: "4. Unsupervised Learning — Clustering",
        content: [
          "Clustering finds groups in data without labels. It is used for customer segmentation, anomaly detection, and pattern discovery.",
        ],
        code: `from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering
from sklearn.decomposition import PCA
from sklearn.metrics import silhouette_score
import matplotlib.pyplot as plt

# K-Means with optimal K selection (elbow method + silhouette)
inertias = []
silhouettes = []
k_range = range(2, 11)

for k in k_range:
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    labels = kmeans.fit_predict(X_scaled)
    inertias.append(kmeans.inertia_)
    silhouettes.append(silhouette_score(X_scaled, labels))

# Plot elbow curve
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))
ax1.plot(k_range, inertias, 'bo-')
ax1.set_xlabel('K'); ax1.set_ylabel('Inertia'); ax1.set_title('Elbow Method')
ax2.plot(k_range, silhouettes, 'ro-')
ax2.set_xlabel('K'); ax2.set_ylabel('Silhouette Score'); ax2.set_title('Silhouette Method')
plt.tight_layout(); plt.show()

# Choose optimal K (highest silhouette)
optimal_k = k_range[np.argmax(silhouettes)]
kmeans = KMeans(n_clusters=optimal_k, random_state=42, n_init=10)
clusters = kmeans.fit_predict(X_scaled)

# DBSCAN — density-based clustering (finds any shape, detects outliers)
dbscan = DBSCAN(eps=0.5, min_samples=5)
dbscan_clusters = dbscan.fit_predict(X_scaled)
# -1 means outlier/noise

# PCA for visualization (reduce to 2D)
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)
print(f"Explained variance: {pca.explained_variance_ratio_}")

# Visualize clusters
plt.scatter(X_pca[:, 0], X_pca[:, 1], c=clusters, cmap='viridis', alpha=0.6)
plt.xlabel(f'PC1 ({pca.explained_variance_ratio_[0]:.1%})')
plt.ylabel(f'PC2 ({pca.explained_variance_ratio_[1]:.1%})')
plt.title(f'K-Means Clustering (K={optimal_k})')
plt.colorbar(label='Cluster')
plt.show()

# Cluster profiling — understand what each cluster represents
df['cluster'] = clusters
cluster_profile = df.groupby('cluster').agg({
    'age': 'mean',
    'income': 'mean',
    'spending_score': 'mean',
    'customer_id': 'count',
}).round(2)
print(cluster_profile)`,
      },
      {
        heading: "5. Model Evaluation Metrics — Choosing the Right One",
        content: [
          "Using the wrong metric can lead to wrong conclusions. Choose metrics based on the business problem.",
        ],
        table: {
          headers: ["Metric", "When to Use", "Interpretation"],
          rows: [
            ["Accuracy", "Balanced classes", "Overall correctness — misleading if classes are imbalanced"],
            ["Precision", "False positives are costly", "Of predicted positives, how many are correct"],
            ["Recall", "False negatives are costly", "Of actual positives, how many did we find"],
            ["F1-Score", "Balance precision and recall", "Harmonic mean of precision and recall"],
            ["ROC-AUC", "Binary classification, any threshold", "Ability to rank positives above negatives"],
            ["RMSE", "Regression, large errors matter", "Root mean squared error — sensitive to outliers"],
            ["MAE", "Regression, outliers less important", "Mean absolute error — robust to outliers"],
            ["R-squared", "Regression, explaining variance", "Proportion of variance explained (0-1)"],
            ["MAPE", "Regression, relative error matters", "Mean absolute percentage error"],
            ["Silhouette", "Clustering quality", "How similar objects are to their cluster (-1 to 1)"],
          ],
        },
      },
      {
        heading: "6. Handling Imbalanced Data",
        content: [
          "Real-world data is often imbalanced (e.g., 99% normal, 1% fraud). These techniques address the problem.",
        ],
        code: `from imblearn.over_sampling import SMOTE
from imblearn.under_sampling import RandomUnderSampler
from sklearn.utils.class_weight import compute_class_weight
import numpy as np

# Check class distribution
print(y_train.value_counts(normalize=True))
# 0: 0.95, 1: 0.05  — highly imbalanced

# Method 1: Class weights — penalize errors on minority class
weights = compute_class_weight('balanced', classes=np.unique(y_train), y=y_train)
class_weight = dict(zip(np.unique(y_train), weights))
model = RandomForestClassifier(class_weight=class_weight, random_state=42)

# Method 2: SMOTE — synthetic oversampling of minority class
smote = SMOTE(random_state=42)
X_train_smote, y_train_smote = smote.fit_resample(X_train_scaled, y_train)
print(y_train_smote.value_counts(normalize=True))
# 0: 0.5, 1: 0.5  — balanced

# Method 3: Undersampling — reduce majority class
undersampler = RandomUnderSampler(random_state=42)
X_train_under, y_train_under = undersampler.fit_resample(X_train_scaled, y_train)

# Method 4: Combined — SMOTE + undersampling
from imblearn.pipeline import Pipeline
pipeline = Pipeline([
    ('smote', SMOTE(sampling_strategy=0.5, random_state=42)),  # 1:2 ratio
    ('undersampler', RandomUnderSampler(sampling_strategy=0.8, random_state=42)),
])

# Evaluate with precision-recall curve (better than ROC for imbalanced data)
from sklearn.metrics import precision_recall_curve, average_precision_score
precision, recall, thresholds = precision_recall_curve(y_test, y_prob)
avg_precision = average_precision_score(y_test, y_prob)
print(f"Average Precision: {avg_precision:.4f}")`,
      },
      {
        heading: "7. When to Use ML vs Traditional Statistics",
        content: [
          "Machine learning is not always the answer. Sometimes a simple statistical test is more appropriate and interpretable.",
        ],
        table: {
          headers: ["Use Traditional Statistics", "Use Machine Learning"],
          rows: [
            ["You need to understand relationships and causality", "You need accurate predictions"],
            ["Interpretability is critical", "Performance is more important than interpretability"],
            ["You have a specific hypothesis to test", "You want to discover patterns"],
            ["Sample size is small (< 1000)", "You have large datasets (> 10,000 rows)"],
            ["You need confidence intervals and p-values", "You need a deployable model"],
            ["The problem is well-understood mathematically", "The problem is complex with many variables"],
            ["Stakeholders need to trust and understand the result", "Automated decisions are acceptable"],
          ],
        },
      },
    ],
  },

  {
    id: "python-pdf-editing",
    title: "Python PDF Editing: Read, Merge, Split, Rotate & Encrypt",
    category: "Python",
    icon: "FileText",
    description: "A comprehensive guide to manipulating existing PDF files using PyPDF2 and PyMuPDF (fitz). Learn to extract text, merge documents, split pages, rotate, crop, add watermarks, and encrypt PDFs with practical examples from basic to advanced.",
    level: "Beginner",
    estimatedTime: "50 min read",
    sections: [
      {
        heading: "Introduction to PDF Editing in Python",
        content: [
          "PDF (Portable Document Format) is one of the most ubiquitous file formats. Whether you are processing invoices, generating reports, or archiving documents, the ability to programmatically read and manipulate PDFs is an essential skill.",
          "Python offers several powerful libraries for working with PDFs. In this tutorial, we focus on two of the most popular and capable options:",
          "PyPDF2 is a pure-Python library that excels at structural operations — merging, splitting, rotating, cropping, and encrypting PDFs. It is lightweight and installs cleanly on any platform.",
          "PyMuPDF (imported as fitz) is a high-performance library backed by the MuPDF C engine. It provides blazing-fast text extraction, rendering, annotation support, and fine-grained page manipulation.",
        ],
        list: [
          "PyPDF2 — pure-Python, no compiled dependencies, great for structural operations (merge, split, rotate, encrypt)",
          "PyMuPDF (fitz) — C-backed, high performance, excellent for text extraction, rendering, and annotation",
          "Both libraries are open source and actively maintained",
          "All examples in this tutorial are tested with Python 3.8+",
        ],
      },
      {
        heading: "Installation and Setup",
        content: [
          "Both PyPDF2 and PyMuPDF are available on PyPI. We recommend creating a virtual environment to keep your dependencies isolated.",
          "PyMuPDF distributes pre-built wheels for Windows, macOS, and Linux, so you typically do not need a C compiler.",
        ],
        code: `# Create and activate a virtual environment (recommended)
python -m venv pdfenv

# Activate on Windows
pdfenv\\Scripts\\activate

# Activate on macOS/Linux
source pdfenv/bin/activate

# Install both libraries
pip install PyPDF2 PyMuPDF

# Verify installation
python -c "import PyPDF2; print('PyPDF2 OK')"
python -c "import fitz; print('PyMuPDF OK'"`,
        table: {
          headers: ["Library", "Import Name", "Key Strength", "License"],
          rows: [
            ["PyPDF2", "PyPDF2", "Structural operations, no C deps", "BSD-3-Clause"],
            ["PyMuPDF", "fitz", "Speed, text extraction, rendering", "AGPL-3.0"],
            ["pdfplumber", "pdfplumber", "Table extraction (complement)", "MIT"],
          ],
        },
      },
      {
        heading: "Reading PDF Metadata and Properties",
        content: [
          "Every PDF file carries metadata — title, author, subject, keywords, creation date, and more. This information is stored in the document's Info dictionary and is accessible through both libraries.",
          "Extracting metadata is often the first step in a PDF processing pipeline. You can use it to sort documents, validate sources, or populate a database catalog.",
        ],
        code: `# --- Reading metadata with PyPDF2 ---
from PyPDF2 import PdfReader

reader = PdfReader("sample.pdf")

# Basic document info
print(f"Number of pages: {len(reader.pages)}")
print(f"Is encrypted: {reader.is_encrypted}")

# Metadata fields
meta = reader.metadata
if meta:
    print(f"Title:    {meta.title}")
    print(f"Author:   {meta.author}")
    print(f"Subject:  {meta.subject}")
    print(f"Creator:  {meta.creator}")

# --- Reading metadata with PyMuPDF ---
import fitz

doc = fitz.open("sample.pdf")
print(f"Page count: {doc.page_count}")
print(f"Metadata: {doc.metadata}")
print(f"Needs pass: {doc.needs_pass}")
doc.close()`,
        list: [
          "reader.metadata returns a PyPDF2.Metadata object — access fields as properties (meta.title, meta.author)",
          "Some PDFs may have empty or missing metadata fields — always check for None",
          "PyMuPDF's doc.metadata returns a plain dict with keys like 'title', 'author', 'creationDate'",
        ],
      },
      {
        heading: "Extracting Text from PDFs",
        content: [
          "Text extraction is one of the most common PDF tasks. Whether you are indexing documents for search, feeding text into an NLP pipeline, or converting PDFs to plain text for analysis, you need reliable extraction.",
          "PyMuPDF is significantly faster than PyPDF2 for text extraction and generally produces cleaner output, especially for complex layouts. However, PyPDF2's extraction is sufficient for simple, text-based PDFs.",
        ],
        code: `# --- Method 1: Extract text with PyPDF2 ---
from PyPDF2 import PdfReader

reader = PdfReader("report.pdf")

# Extract text from every page
full_text = ""
for i, page in enumerate(reader.pages):
    page_text = page.extract_text()
    full_text += f"\\n--- Page {i + 1} ---\\n{page_text}"

print(full_text[:2000])  # Preview first 2000 chars

# Extract from a specific page (0-indexed)
page_3_text = reader.pages[2].extract_text()
print(page_3_text)


# --- Method 2: Extract text with PyMuPDF (faster, cleaner) ---
import fitz

doc = fitz.open("report.pdf")

all_text = ""
for page in doc:
    all_text += page.get_text()

print(all_text[:2000])

# Extract from specific pages (e.g., pages 5-10)
selected_text = ""
for page_num in range(4, 10):
    page = doc[page_num]
    selected_text += page.get_text()

doc.close()`,
        table: {
          headers: ["Extraction Mode", "Library", "Returns", "Use Case"],
          rows: [
            ["extract_text()", "PyPDF2", "str", "Simple text-based PDFs"],
            ["get_text()", "PyMuPDF", "str", "General purpose, fast"],
            ["get_text('blocks')", "PyMuPDF", "list of tuples", "Layout-aware extraction"],
            ["get_text('dict')", "PyMuPDF", "dict with spans", "Font/color-level detail"],
            ["get_text('words')", "PyMuPDF", "list of tuples", "Word-by-word with positions"],
          ],
        },
      },
      {
        heading: "Merging Multiple PDFs",
        content: [
          "Merging PDFs is a staple operation — combining monthly reports into a quarterly file, appending cover letters, or assembling a document package from multiple sources.",
          "PyPDF2 provides a PdfWriter class designed for this task. You can merge entire files or selectively append individual pages.",
        ],
        code: `from PyPDF2 import PdfReader, PdfWriter

# --- Strategy 1: Simple append merge ---
writer = PdfWriter()

files_to_merge = ["chapter1.pdf", "chapter2.pdf", "chapter3.pdf"]

for filename in files_to_merge:
    reader = PdfReader(filename)
    for page in reader.pages:
        writer.add_page(page)

with open("merged_book.pdf", "wb") as f:
    writer.write(f)

print("Merged 3 files into merged_book.pdf")


# --- Strategy 2: Insert pages at a specific position ---
writer = PdfWriter()

main_reader = PdfReader("main_report.pdf")
for page in main_reader.pages:
    writer.add_page(page)

# Insert a cover page at the beginning
cover_reader = PdfReader("cover_page.pdf")
writer.insert_page(cover_reader.pages[0], index=0)

with open("report_with_cover.pdf", "wb") as f:
    writer.write(f)


# --- Strategy 3: Custom page assembly from multiple sources ---
writer = PdfWriter()

sources = [
    ("doc_a.pdf", [0, 1]),        # Pages 1-2 from doc_a
    ("doc_b.pdf", [0, 2, 4]),     # Pages 1, 3, 5 from doc_b
    ("doc_c.pdf", range(0, 5)),   # First 5 pages from doc_c
]

for filename, page_indices in sources:
    reader = PdfReader(filename)
    for idx in page_indices:
        writer.add_page(reader.pages[idx])

with open("custom_assembly.pdf", "wb") as f:
    writer.write(f)`,
        list: [
          "Always use PdfWriter for merging in PyPDF2 3.x — the older PdfMerger class is deprecated",
          "insert_page() lets you place a page at any 0-indexed position in the output",
          "When building custom assemblies, track page indices carefully to avoid duplicates or gaps",
        ],
      },
      {
        heading: "Splitting PDFs into Separate Pages",
        content: [
          "Splitting a PDF is the inverse of merging — you break a multi-page document into individual files or smaller chunks. This is useful for distributing specific pages, creating previews, or processing pages in parallel.",
        ],
        code: `# --- Method 1: Split each page into its own file (PyPDF2) ---
from PyPDF2 import PdfReader, PdfWriter
import os

source = PdfReader("large_document.pdf")
os.makedirs("split_pages", exist_ok=True)

for i, page in enumerate(source.pages):
    writer = PdfWriter()
    writer.add_page(page)
    output_path = f"split_pages/page_{i + 1:04d}.pdf"
    with open(output_path, "wb") as f:
        writer.write(f)

print(f"Split {len(source.pages)} pages into individual files")


# --- Method 2: Split into chunks of N pages (PyPDF2) ---
chunk_size = 5
source = PdfReader("large_document.pdf")
total_pages = len(source.pages)

for start in range(0, total_pages, chunk_size):
    writer = PdfWriter()
    end = min(start + chunk_size, total_pages)
    for i in range(start, end):
        writer.add_page(source.pages[i])
    output_path = f"chunk_{start + 1}_to_{end}.pdf"
    with open(output_path, "wb") as f:
        writer.write(f)


# --- Method 3: Split using PyMuPDF ---
import fitz

doc = fitz.open("large_document.pdf")

# Split a range of pages into one file
new_doc = fitz.open()
new_doc.insert_pdf(doc, from_page=10, to_page=19)  # Pages 11-20
new_doc.save("pages_11_to_20.pdf")
new_doc.close()
doc.close()`,
        table: {
          headers: ["Approach", "Library", "Output", "Best For"],
          rows: [
            ["One page per file", "PyPDF2", "N single-page PDFs", "Distributing individual pages"],
            ["Chunk splitting", "PyPDF2", "Several multi-page PDFs", "Batch processing large docs"],
            ["insert_pdf range", "PyMuPDF", "Flexible page ranges", "Precise page range extraction"],
          ],
        },
      },
      {
        heading: "Rotating PDF Pages",
        content: [
          "Pages in a PDF can sometimes be in the wrong orientation — a landscape chart embedded in a portrait document, or a scanned page that was fed sideways. Rotating pages fixes these issues programmatically.",
        ],
        code: `# --- Rotating pages with PyPDF2 ---
from PyPDF2 import PdfReader, PdfWriter

reader = PdfReader("mixed_orientation.pdf")
writer = PdfWriter()

for i, page in enumerate(reader.pages):
    # Rotate every other page 90 degrees clockwise
    if i % 2 == 1:
        page.rotate_clockwise(90)
    
    # Rotate specific pages by 180 degrees
    if i in [0, 5, 10]:
        page.rotate_clockwise(180)
    
    writer.add_page(page)

with open("rotated_output.pdf", "wb") as f:
    writer.write(f)


# --- Rotating pages with PyMuPDF ---
import fitz

doc = fitz.open("mixed_orientation.pdf")

for i in range(doc.page_count):
    page = doc[i]
    current_rotation = page.rotation
    print(f"Page {i + 1} rotation: {current_rotation}")
    
    if i == 2:
        page.set_rotation(90)
    if i == 4:
        page.set_rotation(270)

doc.save("fitz_rotated.pdf")
doc.close()


# --- Auto-fix sideways pages ---
doc = fitz.open("scanned_document.pdf")

for i in range(doc.page_count):
    page = doc[i]
    rect = page.rect
    if rect.width > rect.height and page.rotation == 0:
        page.set_rotation(90)
        print(f"Fixed orientation on page {i + 1}")

doc.save("auto_fixed.pdf")
doc.close()`,
        list: [
          "rotate_clockwise() accepts only 90, 180, or 270 degrees in PyPDF2",
          "PyMuPDF's set_rotation() persists the rotation in the page dictionary",
          "Rotation is cumulative — calling rotate_clockwise(90) twice produces 180 degrees",
          "Always check page.rect dimensions to detect orientation issues before rotating",
        ],
      },
      {
        heading: "Cropping PDF Pages",
        content: [
          "Cropping (also called setting the media box or crop box) allows you to trim whitespace, remove headers/footers, or focus on a specific region of a page.",
          "In PyPDF2, you modify the page's mediabox. In PyMuPDF, you use set_cropbox() with a Rect object. Note: PDF coordinates start from the bottom-left corner, not the top-left.",
        ],
        code: `# --- Cropping with PyPDF2 ---
from PyPDF2 import PdfReader, PdfWriter

reader = PdfReader("full_page.pdf")
writer = PdfWriter()

page = reader.pages[0]
original_width = float(page.mediabox.width)
original_height = float(page.mediabox.height)

# Crop to the top half of the page
page.mediabox.upper_right = (original_width, original_height / 2)
page.mediabox.lower_left = (0, 0)

writer.add_page(page)
with open("cropped_top_half.pdf", "wb") as f:
    writer.write(f)


# --- Cropping with PyMuPDF ---
import fitz

doc = fitz.open("full_page.pdf")
page = doc[0]
rect = page.rect

# Crop to the bottom-right quarter
new_rect = fitz.Rect(
    rect.width / 2,   # x0 (left)
    rect.height / 2,  # y0 (top)
    rect.width,       # x1 (right)
    rect.height       # y1 (bottom)
)
page.set_cropbox(new_rect)

doc.save("cropped.pdf")
doc.close()

# --- Crop margins from all pages ---
doc = fitz.open("document_with_margins.pdf")

margin = 50  # points (1 point = 1/72 inch)
for i in range(doc.page_count):
    page = doc[i]
    rect = page.rect
    cropped = fitz.Rect(
        rect.x0 + margin, rect.y0 + margin,
        rect.x1 - margin, rect.y1 - margin
    )
    page.set_cropbox(cropped)

doc.save("margins_removed.pdf")
doc.close()`,
        table: {
          headers: ["Concept", "PyPDF2", "PyMuPDF", "Notes"],
          rows: [
            ["Coordinate origin", "Bottom-left", "Top-left", "Critical difference between libraries"],
            ["Set crop area", "page.mediabox attributes", "page.set_cropbox(Rect)", "PyMuPDF is more intuitive"],
            ["Unit", "Points (1/72 inch)", "Points (1/72 inch)", "Same unit system"],
          ],
        },
      },
      {
        heading: "Adding Watermarks to PDFs",
        content: [
          "Watermarks are overlay text or images applied to PDF pages to indicate status (DRAFT, CONFIDENTIAL), ownership, or branding. They are typically semi-transparent and positioned diagonally across the page.",
        ],
        code: `# --- Method 1: Watermark using an overlay PDF (PyPDF2) ---
from PyPDF2 import PdfReader, PdfWriter

watermark_reader = PdfReader("watermark.pdf")
watermark_page = watermark_reader.pages[0]

source_reader = PdfReader("document.pdf")
writer = PdfWriter()

for page in source_reader.pages:
    page.merge_page(watermark_page)
    writer.add_page(page)

with open("watermarked.pdf", "wb") as f:
    writer.write(f)


# --- Method 2: Text watermark with PyMuPDF ---
import fitz

doc = fitz.open("document.pdf")

for i in range(doc.page_count):
    page = doc[i]
    rect = page.rect
    
    page.insert_text(
        (rect.width / 2 - 150, rect.height / 2),
        "CONFIDENTIAL",
        fontsize=48,
        fontname="helv",
        color=(0.8, 0.8, 0.8),   # light gray
        rotate=45,
        overlay=True
    )

doc.save("watermarked.pdf")
doc.close()


# --- Method 3: Image watermark (logo) with PyMuPDF ---
doc = fitz.open("document.pdf")

for i in range(doc.page_count):
    page = doc[i]
    rect = page.rect
    
    logo_rect = fitz.Rect(
        rect.width - 130, rect.height - 60,
        rect.width - 20,  rect.height - 20
    )
    page.insert_image(logo_rect, filename="logo.png", overlay=True)

doc.save("logo_watermarked.pdf")
doc.close()`,
        list: [
          "Create your overlay watermark PDF once and reuse it across many documents",
          "Use overlay=True in PyMuPDF to draw watermarks on top of existing content",
          "For semi-transparency in PyMuPDF, use light colors like (0.8, 0.8, 0.8)",
          "Watermarks added with merge_page() are permanent — keep a backup of the original",
        ],
      },
      {
        heading: "Encrypting and Decrypting PDFs",
        content: [
          "PDF encryption protects sensitive documents by requiring a password to open them or by restricting certain actions (printing, copying, editing). This is essential for confidential reports and financial documents.",
        ],
        code: `# --- Encrypting a PDF with PyPDF2 ---
from PyPDF2 import PdfReader, PdfWriter

reader = PdfReader("sensitive_report.pdf")
writer = PdfWriter()

for page in reader.pages:
    writer.add_page(page)

# user_password: needed to open the document
# owner_password: needed to change permissions
writer.encrypt(
    user_password="open123",
    owner_password="admin456",
    use_128bit=True
)

with open("encrypted.pdf", "wb") as f:
    writer.write(f)


# --- Decrypting a PDF with PyPDF2 ---
reader = PdfReader("encrypted.pdf")

if reader.is_encrypted:
    result = reader.decrypt("open123")
    
    if result == 0:
        print("Incorrect password")
    elif result == 1:
        print("Decrypted with user password")
    elif result == 2:
        print("Decrypted with owner password")
    
    for page in reader.pages:
        print(page.extract_text()[:200])


# --- Encrypting with PyMuPDF (stronger AES-256) ---
import fitz

doc = fitz.open("sensitive_report.pdf")

doc.save(
    "fitz_encrypted.pdf",
    encryption=fitz.PDF_ENCRYPT_AES_256,
    user_pw="open123",
    owner_pw="admin456",
    permissions=fitz.PDF_PERM_PRINT | fitz.PDF_PERM_COPY
)
doc.close()

# Decrypt with PyMuPDF
doc = fitz.open("fitz_encrypted.pdf")
if doc.needs_pass:
    if doc.authenticate("open123"):
        print("Authenticated")
        doc.save("decrypted_copy.pdf")
doc.close()`,
        table: {
          headers: ["Feature", "PyPDF2", "PyMuPDF", "Notes"],
          rows: [
            ["User password", "Yes (user_password)", "Yes (user_pw)", "Required to open the PDF"],
            ["Owner password", "Yes (owner_password)", "Yes (owner_pw)", "Required to change permissions"],
            ["128-bit encryption", "Yes (use_128bit=True)", "Yes (default)", "Standard for modern PDFs"],
            ["AES-256 encryption", "No", "Yes (PDF_ENCRYPT_AES_256)", "Stronger, PyMuPDF only"],
            ["Decryption check", "reader.decrypt()", "doc.authenticate()", "Returns 0 on failure"],
          ],
        },
      },
      {
        heading: "Advanced: Complete PDF Processing Pipeline",
        content: [
          "Now let's combine multiple operations into a reusable pipeline. This function extracts text, adds watermarks, and optionally encrypts the output — all in one call. This pattern is directly applicable to production systems.",
        ],
        code: `import fitz
from PyPDF2 import PdfReader, PdfWriter
import os, hashlib, time
from datetime import datetime

def process_pdf_pipeline(
    input_path, output_path,
    watermark_text="CONFIDENTIAL",
    password=None
):
    """
    Full pipeline: extract text, add watermark, optionally encrypt.
    Returns a metadata dict with processing results.
    """
    results = {
        "input_file": input_path,
        "processed_at": datetime.now().isoformat(),
        "pages": 0,
        "char_count": 0,
        "watermarked": False,
        "encrypted": False,
    }
    
    # Step 1: Open and extract text
    doc = fitz.open(input_path)
    results["pages"] = doc.page_count
    
    full_text = ""
    for page in doc:
        full_text += page.get_text()
    results["char_count"] = len(full_text)
    
    # Step 2: Add text watermark
    for i in range(doc.page_count):
        page = doc[i]
        rect = page.rect
        page.insert_text(
            (rect.width / 2 - 120, rect.height / 2),
            watermark_text,
            fontsize=48, fontname="helv",
            color=(0.85, 0.85, 0.85),
            rotate=45, overlay=True
        )
    results["watermarked"] = True
    
    # Step 3: Save (with or without encryption)
    if password:
        doc.save(output_path,
            encryption=fitz.PDF_ENCRYPT_AES_256,
            user_pw=password, owner_pw=password)
        results["encrypted"] = True
    else:
        doc.save(output_path)
    doc.close()
    
    return results


def batch_process(input_dir, output_dir, password=None):
    """Process all PDFs in a directory."""
    os.makedirs(output_dir, exist_ok=True)
    all_results = []
    
    for filename in os.listdir(input_dir):
        if not filename.lower().endswith(".pdf"):
            continue
        
        input_path = os.path.join(input_dir, filename)
        output_path = os.path.join(output_dir, f"processed_{filename}")
        
        try:
            result = process_pdf_pipeline(
                input_path, output_path,
                watermark_text="INTERNAL USE ONLY",
                password=password
            )
            all_results.append(result)
            print(f"Processed: {filename} -> {result['pages']} pages")
        except Exception as e:
            print(f"Error processing {filename}: {e}")
    
    return all_results

# Run batch processing
results = batch_process("./input_pdfs", "./output_pdfs", password="secure123")
print(f"\\nProcessed {len(results)} files")`,
        list: [
          "Always wrap PDF processing in try/except — corrupted PDFs are common in the wild",
          "Use PyMuPDF for text extraction and rendering; use PyPDF2 for structural merges when you need pure-Python portability",
          "Close document objects with doc.close() to avoid file handle leaks in batch processing",
          "PyMuPDF is typically 5-20x faster than PyPDF2 for text extraction — benchmark on your own documents",
        ],
      },
    ],
  },

  {
    id: "python-create-pdf",
    title: "Creating PDFs from Scratch: Text, Images, Tables & Layouts",
    category: "Python",
    icon: "FileText",
    description: "Learn to generate professional PDF documents from scratch using Python's two most popular PDF creation libraries — ReportLab and FPDF2. Covers adding text, paragraphs, fonts, colors, images, tables, headers, footers, and page numbers with progressive examples from basic to advanced.",
    level: "Beginner",
    estimatedTime: "45 min read",
    sections: [
      {
        heading: "Introduction to PDF Generation in Python",
        content: [
          "Many applications need to create PDFs from scratch — generating invoices, reports, certificates, data sheets, or any structured document output. Python has two dominant libraries for this purpose.",
          "FPDF2 is a simple, lightweight library that is easy to learn and great for straightforward documents. It follows a cursor-based model where you position text and images at specific coordinates.",
          "ReportLab is a more powerful library that uses a flowable-based layout system. Flowables are content elements (paragraphs, tables, images, spacers) that the engine automatically flows across pages, handling page breaks and spacing automatically.",
        ],
        list: [
          "FPDF2 — simple, cursor-based positioning, great for quick documents and invoices",
          "ReportLab — flowable-based layout engine, ideal for complex multi-page reports",
          "Both libraries are pure Python and cross-platform",
          "All examples are tested with Python 3.8+",
        ],
      },
      {
        heading: "Installation and Setup",
        content: [
          "Both FPDF2 and ReportLab are available on PyPI. Note that the package name for FPDF2 is fpdf2 (not fpdf, which is the older, unmaintained version).",
        ],
        code: `# Install both libraries
pip install fpdf2 reportlab

# Optional: install Pillow for advanced image handling
pip install Pillow

# Verify installation
python -c "from fpdf import FPDF; print('FPDF2 OK')"
python -c "import reportlab; print('ReportLab version:', reportlab.Version)"`,
        table: {
          headers: ["Library", "Package", "Import", "Approach", "Best For"],
          rows: [
            ["FPDF2", "fpdf2", "from fpdf import FPDF", "Cursor/coordinate-based", "Quick documents, invoices"],
            ["ReportLab", "reportlab", "from reportlab.lib import *", "Flowable-based layout", "Complex multi-page reports"],
            ["Pillow", "Pillow", "from PIL import Image", "Image processing", "Resizing images for PDFs"],
          ],
        },
      },
      {
        heading: "Creating Your First PDF with FPDF2",
        content: [
          "The FPDF2 workflow is: create an FPDF object, add a page, set a font, write content, and save. FPDF2 uses a cursor model — an internal cursor tracks the current X and Y position. Methods like cell(), multi_cell(), and image() place content at the cursor and advance it downward.",
        ],
        code: `from fpdf import FPDF

pdf = FPDF()
pdf.add_page()

# Set font: family, style, size
pdf.set_font("Helvetica", "B", 16)

# Add a title using cell()
# cell(width, height, text, new_x, new_y, align)
pdf.cell(0, 10, "My First PDF Document", new_x="LMARGIN", new_y="NEXT", align="C")

pdf.ln(10)  # Line break

# Switch to regular font for body text
pdf.set_font("Helvetica", "", 12)

# Add body text using multi_cell() for automatic wrapping
body_text = (
    "This PDF was generated entirely with Python and the FPDF2 library. "
    "FPDF2 uses a cursor-based model where you position content at specific "
    "coordinates on the page. The multi_cell() method automatically wraps "
    "text to fit within the specified width, making it perfect for paragraphs."
)
pdf.multi_cell(0, 8, body_text)

pdf.output("my_first_pdf.pdf")
print("PDF created: my_first_pdf.pdf")`,
        list: [
          "FPDF() creates a document with default A4 page size and millimeter units",
          "add_page() starts a new page and resets the cursor",
          "set_font(family, style, size) must be called before adding any text",
          "cell() places a single-line text box; multi_cell() wraps text automatically",
          "output() writes the PDF to disk — call it once at the end",
        ],
      },
      {
        heading: "Fonts, Colors, and Text Formatting",
        content: [
          "Professional documents require fine-grained control over typography. Both FPDF2 and ReportLab support custom fonts, text colors, background colors, and various text styles.",
          "FPDF2 ships with the 14 standard PDF fonts (Helvetica, Times, Courier and their variants). To use custom TrueType fonts, register them with add_font().",
        ],
        code: `from fpdf import FPDF

pdf = FPDF()
pdf.add_page()

# --- Using built-in fonts ---
pdf.set_font("Times", "B", 20)
pdf.cell(0, 12, "Times Bold 20pt Title", new_x="LMARGIN", new_y="NEXT")

pdf.set_font("Courier", "", 12)
pdf.cell(0, 8, "Courier 12pt monospace text", new_x="LMARGIN", new_y="NEXT")

pdf.ln(5)

# --- Text colors ---
# set_text_color(r, g, b) — values 0-255
pdf.set_font("Helvetica", "B", 16)
pdf.set_text_color(0, 51, 102)  # Dark blue
pdf.cell(0, 12, "Colored Title in Dark Blue", new_x="LMARGIN", new_y="NEXT")

# Reset to black
pdf.set_text_color(0, 0, 0)

# --- Background colors (fill) ---
pdf.set_font("Helvetica", "", 12)
pdf.set_fill_color(220, 230, 240)  # Light blue background
pdf.set_text_color(50, 50, 50)
pdf.cell(0, 10, " Text with light blue background ",
         new_x="LMARGIN", new_y="NEXT", fill=True)

# Reset fill
pdf.set_fill_color(255, 255, 255)

# --- Drawing lines ---
pdf.ln(5)
pdf.set_draw_color(100, 100, 100)  # Gray line
pdf.line(10, pdf.get_y(), 200, pdf.get_y())  # Horizontal line

pdf.ln(5)

# --- Multi-style paragraph using HTML support ---
pdf.set_text_color(0, 0, 0)
pdf.set_font("Helvetica", "", 11)

paragraph = (
    "This paragraph demonstrates <b>bold text</b>, <i>italic text</i>, "
    "and <u>underlined text</u> all within the same cell using FPDF2's "
    "built-in HTML support. You can also use "
    "<font color='#FF0000'>colored text</font> inline."
)
pdf.write_html(paragraph)

pdf.output("formatted_text.pdf")`,
        table: {
          headers: ["Font Family", "Styles Available", "Type", "Notes"],
          rows: [
            ["Helvetica", "Regular, Bold, Italic, BoldItalic", "Standard (built-in)", "Sans-serif, most common"],
            ["Times", "Regular, Bold, Italic, BoldItalic", "Standard (built-in)", "Serif, traditional look"],
            ["Courier", "Regular, Bold, Italic, BoldItalic", "Standard (built-in)", "Monospace, code/tables"],
            ["Custom TTF/OTF", "As provided in file", "Registered with add_font()", "Full Unicode support"],
          ],
        },
      },
      {
        heading: "Adding Images to PDFs",
        content: [
          "Images bring documents to life — logos, charts, photographs, and diagrams. Both FPDF2 and ReportLab support embedding JPG, PNG, and other common image formats directly into PDF pages.",
          "In FPDF2, the image() method accepts a file path or URL, and you can specify position and dimensions. If you specify only the width, height is auto-calculated to preserve aspect ratio.",
        ],
        code: `from fpdf import FPDF

pdf = FPDF()
pdf.add_page()

# --- Adding an image at a specific position ---
# image(path, x, y, w) — height auto-calculated from width
pdf.image("logo.png", x=10, y=10, w=50)
pdf.ln(35)  # Move cursor below the image

# --- Adding a full-width image ---
pdf.set_font("Helvetica", "B", 14)
pdf.cell(0, 10, "Full-Width Chart", new_x="LMARGIN", new_y="NEXT")
pdf.ln(3)
pdf.image("chart.png", x=10, w=190)  # Full A4 width minus margins

pdf.ln(10)

# --- Centering an image ---
page_width = 210  # A4 width in mm
image_width = 80
x_centered = (page_width - image_width) / 2
pdf.image("diagram.png", x=x_centered, w=image_width)

pdf.ln(10)

# --- Image with a hyperlink ---
pdf.set_font("Helvetica", "I", 10)
pdf.cell(0, 8, "Click the logo below to visit our website:",
         new_x="LMARGIN", new_y="NEXT")
pdf.image("logo.png", x=85, y=pdf.get_y(), w=40, link="https://example.com")

pdf.output("pdf_with_images.pdf")

# --- Resizing images before embedding (using Pillow) ---
from PIL import Image

img = Image.open("large_photo.jpg")
img.thumbnail((800, 600))  # Max dimensions
img.save("resized_photo.jpg", quality=85)

pdf2 = FPDF()
pdf2.add_page()
pdf2.image("resized_photo.jpg", x=30, w=150)
pdf2.output("pdf_with_resized_image.pdf")`,
        list: [
          "Supported formats in FPDF2: JPG, JPEG, PNG, GIF, BMP, WBMP, WEBP",
          "If you specify only width (w), height auto-calculates to preserve aspect ratio",
          "Use Pillow to resize/compress large images before embedding to keep PDF sizes manageable",
          "The link parameter adds a clickable hyperlink to the image area",
        ],
      },
      {
        heading: "Creating Tables in PDFs",
        content: [
          "Tables are essential for reports, invoices, and data summaries. FPDF2 provides a flexible table system using cell() calls, while ReportLab's Table class offers advanced styling including spanning cells, background colors, and per-column alignment.",
        ],
        code: `# --- Method 1: Creating a table with FPDF2 ---
from fpdf import FPDF

pdf = FPDF()
pdf.add_page()
pdf.set_font("Helvetica", "B", 14)
pdf.cell(0, 10, "Sales Report Q3 2024", new_x="LMARGIN", new_y="NEXT", align="C")
pdf.ln(5)

# Table data
headers = ["Product", "Units Sold", "Revenue", "Growth"]
data = [
    ["Widget A", "1,250", "62,500", "+12%"],
    ["Widget B", "890", "44,500", "-5%"],
    ["Widget C", "2,100", "84,000", "+28%"],
    ["Widget D", "560", "33,600", "+3%"],
]

# Column widths (must sum to available page width)
col_widths = [50, 35, 40, 35]

# Header row
pdf.set_font("Helvetica", "B", 11)
pdf.set_fill_color(0, 51, 102)
pdf.set_text_color(255, 255, 255)
pdf.set_draw_color(255, 255, 255)

for i, header in enumerate(headers):
    pdf.cell(col_widths[i], 10, header, border=1, align="C", fill=True)
pdf.ln(10)

# Data rows with alternating colors
pdf.set_font("Helvetica", "", 10)
pdf.set_text_color(0, 0, 0)
pdf.set_draw_color(200, 200, 200)

for row_idx, row in enumerate(data):
    if row_idx % 2 == 0:
        pdf.set_fill_color(240, 240, 245)
    else:
        pdf.set_fill_color(255, 255, 255)
    
    for col_idx, cell_text in enumerate(row):
        align = "L" if col_idx == 0 else "C"
        pdf.cell(col_widths[col_idx], 9, cell_text, border=1, align=align, fill=True)
    pdf.ln(9)

# Total row
pdf.set_font("Helvetica", "B", 10)
pdf.set_fill_color(220, 230, 240)
for i, val in enumerate(["TOTAL", "4,800", "224,600", "+15%"]):
    pdf.cell(col_widths[i], 9, val, border=1, align="C", fill=True)

pdf.output("table_fpdf.pdf")


# --- Method 2: Creating a table with ReportLab ---
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet

doc = SimpleDocTemplate("table_reportlab.pdf", pagesize=A4)
styles = getSampleStyleSheet()
story = []

story.append(Paragraph("Sales Report Q3 2024", styles["Title"]))
story.append(Spacer(1, 20))

table_data = [
    ["Product", "Units Sold", "Revenue", "Growth"],
    ["Widget A", "1,250", "62,500", "+12%"],
    ["Widget B", "890", "44,500", "-5%"],
    ["Widget C", "2,100", "84,000", "+28%"],
    ["TOTAL", "4,800", "224,600", "+15%"]
]

table = Table(table_data, colWidths=[140, 80, 90, 60])
table.setStyle(TableStyle([
    # Header row
    ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#003366")),
    ("TEXTCOLOR", (0, 0), (-1, 0), colors.whitesmoke),
    ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
    ("ALIGN", (0, 0), (-1, 0), "CENTER"),
    # Alternating row colors
    ("ROWBACKGROUNDS", (0, 1), (-1, -2),
     [colors.white, colors.HexColor("#F0F0F5")]),
    # Total row
    ("BACKGROUND", (0, -1), (-1, -1), colors.HexColor("#DCE6F0")),
    ("FONTNAME", (0, -1), (-1, -1), "Helvetica-Bold"),
    # Grid and padding
    ("GRID", (0, 0), (-1, -1), 0.5, colors.grey),
    ("TOPPADDING", (0, 0), (-1, -1), 6),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
]))

story.append(table)
doc.build(story)`,
        table: {
          headers: ["Feature", "FPDF2", "ReportLab", "Notes"],
          rows: [
            ["Cell spanning", "Manual calculation", "SPAN command", "ReportLab is easier for merged cells"],
            ["Alternating rows", "Manual if/else per row", "ROWBACKGROUNDS command", "ReportLab handles automatically"],
            ["Per-cell styling", "Set before each cell()", "TableStyle with coordinates", "ReportLab is more declarative"],
            ["Text wrapping in cells", "Manual with multi_cell", "Automatic with Paragraph cells", "ReportLab wraps automatically"],
          ],
        },
      },
      {
        heading: "Headers, Footers, and Page Numbers",
        content: [
          "Professional documents typically include running headers and footers with page numbers, dates, and confidentiality notices. Both libraries support this through page template mechanisms.",
          "In FPDF2, you subclass FPDF and override the header() and footer() methods. These are called automatically each time a new page is added. In ReportLab, you pass callback functions to doc.build().",
        ],
        code: `# --- Headers and footers with FPDF2 ---
from fpdf import FPDF
from datetime import datetime

class MyPDF(FPDF):
    def header(self):
        self.set_font("Helvetica", "B", 10)
        self.set_text_color(100, 100, 100)
        self.cell(0, 8, "ACME Corp - Quarterly Report",
                  new_x="LMARGIN", new_y="NEXT", align="R")
        self.set_draw_color(200, 200, 200)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(5)
        self.set_font("Helvetica", "", 11)
        self.set_text_color(0, 0, 0)
    
    def footer(self):
        self.set_y(-15)  # 15mm from bottom
        self.set_draw_color(200, 200, 200)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(2)
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(128, 128, 128)
        self.cell(0, 10, f"Page {self.page_no()}", align="C")

pdf = MyPDF()
pdf.add_page()
pdf.set_font("Helvetica", "B", 18)
pdf.cell(0, 12, "Executive Summary", new_x="LMARGIN", new_y="NEXT")
pdf.ln(5)
pdf.set_font("Helvetica", "", 11)
pdf.multi_cell(0, 7, "This is the body text of the report. " * 20)

pdf.output("report_with_headers.pdf")


# --- Headers and footers with ReportLab ---
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet

def add_header_footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica-Bold", 9)
    canvas.setFillColor(colors.HexColor("#666666"))
    canvas.drawRightString(A4[0] - 40, A4[1] - 25,
                           "ACME Corp - Quarterly Report")
    canvas.setStrokeColor(colors.HexColor("#CCCCCC"))
    canvas.line(40, A4[1] - 28, A4[0] - 40, A4[1] - 28)
    
    canvas.line(40, 35, A4[0] - 40, 35)
    canvas.setFont("Helvetica-Oblique", 8)
    canvas.drawCentredString(A4[0] / 2, 22, f"Page {doc.page}")
    canvas.restoreState()

doc = SimpleDocTemplate("reportlab_headers.pdf", pagesize=A4)
styles = getSampleStyleSheet()
story = [
    Paragraph("Executive Summary", styles["Title"]),
    Spacer(1, 15),
    Paragraph("This is the body text of the report. " * 30,
              styles["BodyText"]),
]
doc.build(story, onFirstPage=add_header_footer, onLaterPages=add_header_footer)`,
        list: [
          "In FPDF2, override header() and footer() in a subclass — they run automatically on every page",
          "In ReportLab, pass callback functions to onFirstPage and onLaterPages in doc.build()",
          "Use self.page_no() in FPDF2 or doc.page in ReportLab for page numbers",
          "Always call canvas.saveState() and canvas.restoreState() in ReportLab callbacks",
          "Position footers using negative Y values in FPDF2 (self.set_y(-15) = 15mm from bottom)",
        ],
      },
      {
        heading: "Advanced ReportLab: Flowables and Dynamic Layouts",
        content: [
          "ReportLab's true power lies in its flowable system. Flowables are content elements that the layout engine automatically positions, wraps, and paginates. Key flowables include Paragraph, Spacer, Table, Image, PageBreak, and ListFlowable.",
        ],
        code: `from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, ListFlowable, ListItem, HRFlowable
)
from datetime import datetime

styles = getSampleStyleSheet()

custom_styles = {
    "CustomTitle": ParagraphStyle("CustomTitle", parent=styles["Title"],
        fontSize=28, textColor=colors.HexColor("#003366"),
        spaceAfter=20, alignment=TA_CENTER),
    "CustomHeading": ParagraphStyle("CustomHeading", parent=styles["Heading1"],
        fontSize=16, textColor=colors.HexColor("#003366"),
        spaceBefore=20, spaceAfter=10),
    "CustomBody": ParagraphStyle("CustomBody", parent=styles["BodyText"],
        fontSize=11, leading=16, alignment=TA_JUSTIFY, spaceAfter=10),
}

story = []

# Cover page
story.append(Spacer(1, 80))
story.append(Paragraph("Annual Performance Report", custom_styles["CustomTitle"]))
story.append(Spacer(1, 10))
story.append(Paragraph("Fiscal Year 2024",
    ParagraphStyle("Sub", fontSize=16, alignment=TA_CENTER,
                   textColor=colors.HexColor("#666666"))))
story.append(Spacer(1, 30))
story.append(HRFlowable(width="60%", thickness=1, color=colors.HexColor("#003366")))
story.append(PageBreak())

# Section with bulleted list
story.append(Paragraph("1. Executive Summary", custom_styles["CustomHeading"]))
story.append(Paragraph(
    "Total revenue reached 2.4 million, representing 18% year-over-year growth.",
    custom_styles["CustomBody"]))

bullet_items = [
    ListItem(Paragraph("Revenue growth of 18% year-over-year", custom_styles["CustomBody"])),
    ListItem(Paragraph("Customer acquisition increased by 25%", custom_styles["CustomBody"])),
    ListItem(Paragraph("Operating margins improved from 14% to 17.5%", custom_styles["CustomBody"])),
]
story.append(ListFlowable(bullet_items, bulletType="bullet", start="*"))

# Financial table
story.append(Paragraph("2. Financial Performance", custom_styles["CustomHeading"]))
financial_data = [
    ["Quarter", "Revenue", "Expenses", "Net Profit"],
    ["Q1 2024", "520,000", "410,000", "110,000"],
    ["Q2 2024", "580,000", "445,000", "135,000"],
    ["Q3 2024", "640,000", "480,000", "160,000"],
    ["Q4 2024", "660,000", "495,000", "165,000"],
]
table = Table(financial_data, colWidths=[80, 80, 80, 80])
table.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#003366")),
    ("TEXTCOLOR", (0, 0), (-1, 0), colors.whitesmoke),
    ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
    ("ROWBACKGROUNDS", (0, 1), (-1, -1),
     [colors.white, colors.HexColor("#F5F5FA")]),
    ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#CCCCCC")),
    ("TOPPADDING", (0, 0), (-1, -1), 7),
]))
story.append(table)

doc = SimpleDocTemplate("advanced_report.pdf", pagesize=A4)
doc.build(story)`,
        table: {
          headers: ["Flowable", "Purpose", "Example Use"],
          rows: [
            ["Paragraph", "Styled text block", "Body text, headings, captions"],
            ["Spacer", "Vertical whitespace", "Gap between sections"],
            ["Table", "Structured data grid", "Financial data, schedules"],
            ["Image", "Embedded graphic", "Charts, logos, photos"],
            ["PageBreak", "Force new page", "Chapter separations"],
            ["ListFlowable", "Bulleted/numbered list", "Recommendations, key points"],
            ["HRFlowable", "Horizontal rule", "Section dividers"],
          ],
        },
      },
      {
        heading: "Putting It All Together: Reusable PDF Generator",
        content: [
          "Let's build a reusable, production-ready PDF generator function that combines everything we have learned. This function accepts structured data and produces a polished PDF report.",
        ],
        code: `from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, HRFlowable
)
from datetime import datetime
import os

def generate_report(output_path, title, subtitle, author, sections,
                    table_data=None, header_text="Report"):
    """Generate a professional PDF report."""
    os.makedirs(os.path.dirname(output_path) or ".", exist_ok=True)
    
    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle("RT", parent=styles["Title"],
        fontSize=26, textColor=colors.HexColor("#003366"),
        spaceAfter=15, alignment=TA_CENTER)
    heading_style = ParagraphStyle("RH", parent=styles["Heading1"],
        fontSize=15, textColor=colors.HexColor("#003366"),
        spaceBefore=18, spaceAfter=8)
    body_style = ParagraphStyle("RB", parent=styles["BodyText"],
        fontSize=11, leading=16, alignment=TA_JUSTIFY, spaceAfter=8)
    
    story = []
    
    # Cover
    story.append(Spacer(1, 60))
    story.append(Paragraph(title, title_style))
    story.append(Paragraph(subtitle,
        ParagraphStyle("Sub", fontSize=14, alignment=TA_CENTER,
                       textColor=colors.HexColor("#666666"))))
    story.append(Spacer(1, 20))
    story.append(HRFlowable(width="50%", thickness=1,
                            color=colors.HexColor("#003366")))
    story.append(Spacer(1, 15))
    story.append(Paragraph(
        f"Author: {author}<br/>Date: {datetime.now().strftime('%B %d, %Y')}",
        ParagraphStyle("CM", fontSize=11, alignment=TA_CENTER,
                       textColor=colors.HexColor("#444"), leading=18)))
    story.append(PageBreak())
    
    # Sections
    for idx, section in enumerate(sections, 1):
        story.append(Paragraph(f"{idx}. {section['heading']}", heading_style))
        for para in section.get("paragraphs", []):
            story.append(Paragraph(para, body_style))
    
    # Optional table
    if table_data:
        all_data = [table_data["headers"]] + table_data["rows"]
        col_count = len(table_data["headers"])
        col_width = (A4[0] - 80) / col_count
        tbl = Table(all_data, colWidths=[col_width] * col_count)
        tbl.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#003366")),
            ("TEXTCOLOR", (0, 0), (-1, 0), colors.whitesmoke),
            ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
            ("ROWBACKGROUNDS", (0, 1), (-1, -1),
             [colors.white, colors.HexColor("#F5F5FA")]),
            ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#CCCCCC")),
            ("TOPPADDING", (0, 0), (-1, -1), 6),
        ]))
        story.append(Spacer(1, 15))
        story.append(tbl)
    
    def on_page(canvas, doc):
        canvas.saveState()
        canvas.setFont("Helvetica", 8)
        canvas.setFillColor(colors.grey)
        if doc.page > 1:
            canvas.drawString(40, A4[1] - 25, header_text)
            canvas.drawRightString(A4[0] - 40, A4[1] - 25, "Internal Use Only")
        canvas.drawCentredString(A4[0] / 2, 25, f"Page {doc.page}")
        canvas.restoreState()
    
    doc = SimpleDocTemplate(output_path, pagesize=A4,
                           topMargin=55, bottomMargin=45)
    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
    print(f"Report generated: {output_path}")
    return output_path

# Usage
generate_report(
    output_path="output/report.pdf",
    title="Data Analysis Report",
    subtitle="Q3 2024 Customer Insights",
    author="Data Analytics Team",
    sections=[
        {"heading": "Overview", "paragraphs": [
            "This report presents Q3 2024 analysis results. Revenue grew 15%."
        ]},
        {"heading": "Methodology", "paragraphs": [
            "Data was collected from three sources and analyzed with Python."
        ]},
    ],
    table_data={
        "headers": ["Category", "Units", "Revenue", "Growth"],
        "rows": [
            ["Electronics", "12,400", "620,000", "+18%"],
            ["Apparel", "8,900", "267,000", "+12%"],
        ]
    }
)`,
        list: [
          "This reusable function works in any Python application — web servers, CLI tools, or scheduled jobs",
          "The sections parameter accepts a list of dicts, making it easy to generate reports from database queries",
          "For web applications, write to a temporary file with tempfile and stream the response",
        ],
      },
    ],
  },

  {
    id: "python-docx-tutorial",
    title: "Working with Word Documents: Creating, Reading & Editing .docx Files",
    category: "Python",
    icon: "FileText",
    description: "A complete guide to programmatically creating, reading, and editing Microsoft Word documents using the python-docx library. Learn to add paragraphs, runs, styles, headings, tables, images, headers, footers, and more with practical examples from basic to advanced.",
    level: "Beginner",
    estimatedTime: "40 min read",
    sections: [
      {
        heading: "Introduction to python-docx",
        content: [
          "Microsoft Word (.docx) files are the standard format for business documents — reports, letters, contracts, and proposals. The python-docx library lets you create and manipulate these files entirely in Python, without needing Microsoft Word installed.",
          "python-docx works directly with the Office Open XML (OOXML) format that underlies .docx files. It provides a clean, Pythonic API for adding paragraphs, formatting text, inserting tables and images, and applying styles.",
        ],
        list: [
          "python-docx creates and edits .docx files without Microsoft Word installed",
          "Supports paragraphs, runs, styles, headings, tables, images, headers, and footers",
          "Does NOT convert PDF to Word or read .doc (legacy) files — use .docx format only",
          "All examples are tested with Python 3.8+ and python-docx 1.x",
        ],
      },
      {
        heading: "Installation and Setup",
        content: [
          "python-docx is available on PyPI and installs cleanly with pip. The only external dependency is lxml, which is automatically installed.",
        ],
        code: `# Install python-docx
pip install python-docx

# Install Pillow for image handling (optional but recommended)
pip install Pillow

# Verify installation
python -c "import docx; print('python-docx OK')"

# Common imports you will use:
# from docx import Document
# from docx.shared import Pt, Inches, Cm, RGBColor
# from docx.enum.text import WD_ALIGN_PARAGRAPH`,
        table: {
          headers: ["Import", "Usage", "Notes"],
          rows: [
            ["from docx import Document", "Document()", "Create or open documents"],
            ["from docx.shared import Pt, Inches, RGBColor", "Pt(12), Inches(1.5)", "Units and colors for formatting"],
            ["from docx.enum.text import WD_ALIGN_PARAGRAPH", "WD_ALIGN_PARAGRAPH.CENTER", "Paragraph alignment constants"],
            ["from docx.enum.table import WD_TABLE_ALIGNMENT", "WD_TABLE_ALIGNMENT.CENTER", "Table alignment constants"],
          ],
        },
      },
      {
        heading: "Creating a New Document",
        content: [
          "Creating a new Word document with python-docx is straightforward. The Document() constructor creates a blank document with default styles. You then add content using methods like add_paragraph(), add_heading(), add_table(), and add_picture().",
        ],
        code: `from docx import Document
from docx.shared import Pt, Inches

# Create a new blank document
doc = Document()

# Add a heading (level 0 = Title, level 1 = Heading 1, etc.)
doc.add_heading("My First Document", level=0)

# Add a paragraph
doc.add_paragraph("Hello, World! This is my first Word document created with Python.")

# Add a subheading
doc.add_heading("Introduction", level=1)

# Add another paragraph
doc.add_paragraph(
    "python-docx makes it easy to generate Word documents programmatically. "
    "This is useful for creating reports, form letters, certificates, and "
    "any other document that follows a template."
)

# Save the document
doc.save("my_first_document.docx")
print("Document created: my_first_document.docx")`,
        list: [
          "Document() with no arguments creates a blank document",
          "Document('existing.docx') opens an existing file for editing",
          "add_heading(text, level) — level 0 is Title, 1-9 are Heading 1-9",
          "add_paragraph(text) adds a paragraph with Normal style by default",
          "save(path) writes the document — always call this at the end",
        ],
      },
      {
        heading: "Working with Paragraphs and Runs",
        content: [
          "In python-docx, a Paragraph is a block-level element, and a Run is a contiguous sequence of text within a paragraph that shares the same formatting. A single paragraph can contain multiple runs with different styles — bold, italic, colored, different fonts.",
          "Understanding the paragraph-run relationship is the key to fine-grained text formatting. When you call add_paragraph('some text'), you get a paragraph with one run. To mix formatting, add multiple runs to the same paragraph.",
        ],
        code: `from docx import Document
from docx.shared import Pt, RGBColor, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH

doc = Document()

# --- Paragraph with mixed formatting using runs ---
p = doc.add_paragraph()

run_normal = p.add_run("This sentence has ")
run_normal.font.size = Pt(12)

run_bold = p.add_run("bold text")
run_bold.bold = True
run_bold.font.size = Pt(12)

p.add_run(" and ")

run_italic = p.add_run("italic text")
run_italic.italic = True
run_italic.font.size = Pt(12)

p.add_run(" and ")

run_colored = p.add_run("colored text")
run_colored.font.color.rgb = RGBColor(0, 0, 255)  # Blue
run_colored.font.size = Pt(12)

p.add_run(".")

# --- Paragraph alignment ---
p_center = doc.add_paragraph("This paragraph is centered.")
p_center.alignment = WD_ALIGN_PARAGRAPH.CENTER

p_right = doc.add_paragraph("This paragraph is right-aligned.")
p_right.alignment = WD_ALIGN_PARAGRAPH.RIGHT

p_justify = doc.add_paragraph(
    "This paragraph is justified. Justified text aligns both the left and "
    "right edges by adjusting the spacing between words. This creates a "
    "clean, block-like appearance that is common in newspapers and books."
)
p_justify.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY

# --- Paragraph spacing and indentation ---
p_spaced = doc.add_paragraph("This paragraph has custom spacing.")
p_spaced.paragraph_format.space_before = Pt(18)
p_spaced.paragraph_format.space_after = Pt(12)
p_spaced.paragraph_format.line_spacing = 1.5
p_spaced.paragraph_format.left_indent = Inches(0.5)

# --- Using built-in styles ---
doc.add_paragraph("Bullet item 1", style="List Bullet")
doc.add_paragraph("Bullet item 2", style="List Bullet")
doc.add_paragraph("Numbered item 1", style="List Number")
doc.add_paragraph("Numbered item 2", style="List Number")

doc.save("paragraphs_and_runs.docx")`,
        table: {
          headers: ["Property", "Object", "Values", "Description"],
          rows: [
            ["bold", "Run", "True/False/None", "Bold formatting (None = inherit)"],
            ["italic", "Run", "True/False/None", "Italic formatting"],
            ["underline", "Run", "True/False/None", "Underline formatting"],
            ["font.size", "Run", "Pt(12), Pt(14)", "Font size in points"],
            ["font.name", "Run", "'Arial', 'Times'", "Font family name"],
            ["font.color.rgb", "Run", "RGBColor(255,0,0)", "Text color as RGB"],
            ["alignment", "Paragraph", "WD_ALIGN_PARAGRAPH.CENTER", "Paragraph alignment"],
            ["space_before", "Paragraph", "Pt(12)", "Space before paragraph"],
            ["line_spacing", "Paragraph", "1.0, 1.5, 2.0", "Line spacing multiplier"],
            ["left_indent", "Paragraph", "Inches(0.5)", "Left indentation"],
          ],
        },
      },
      {
        heading: "Styles and Headings",
        content: [
          "Styles are reusable formatting definitions that ensure consistency. Using styles instead of manual formatting is a best practice — it keeps your code clean and ensures documents look consistent.",
        ],
        code: `from docx import Document
from docx.shared import Pt, RGBColor
from docx.enum.style import WD_STYLE_TYPE

doc = Document()

# --- List all available styles ---
print("Available paragraph styles:")
for style in doc.styles:
    if style.type == WD_STYLE_TYPE.PARAGRAPH:
        print(f"  - {style.name}")

# --- Using built-in heading styles ---
doc.add_heading("Document Title", level=0)
doc.add_heading("Chapter 1: Introduction", level=1)
doc.add_heading("1.1 Background", level=2)
doc.add_heading("1.1.1 Previous Work", level=3)

# --- Applying styles to paragraphs ---
doc.add_paragraph("This uses the Quote style.", style="Quote")
doc.add_paragraph("First bullet", style="List Bullet")
doc.add_paragraph("Second bullet", style="List Bullet")

# --- Creating a custom paragraph style ---
custom_style = doc.styles.add_style("MyCustomStyle", WD_STYLE_TYPE.PARAGRAPH)
custom_style.base_style = doc.styles["Normal"]
custom_style.font.name = "Calibri"
custom_style.font.size = Pt(13)
custom_style.font.color.rgb = RGBColor(0x33, 0x66, 0x99)
custom_style.paragraph_format.space_before = Pt(12)
custom_style.paragraph_format.space_after = Pt(6)
custom_style.paragraph_format.line_spacing = 1.15

doc.add_paragraph("This uses a custom style.", style="MyCustomStyle")

# --- Modifying an existing style ---
normal_style = doc.styles["Normal"]
normal_style.font.name = "Calibri"
normal_style.font.size = Pt(11)

heading1_style = doc.styles["Heading 1"]
heading1_style.font.color.rgb = RGBColor(0x00, 0x33, 0x66)

doc.add_heading("This Heading 1 has a custom color", level=1)

doc.save("styles_and_headings.docx")`,
        list: [
          "Level 0 heading = Title style; levels 1-9 = Heading 1 through Heading 9",
          "Use style='List Bullet' for bulleted lists, style='List Number' for numbered lists",
          "Custom styles persist in the document and appear in Word's style gallery",
          "Modifying a style affects all paragraphs using it — change once, apply everywhere",
          "base_style lets custom styles inherit from existing styles and override properties",
        ],
      },
      {
        heading: "Adding Tables",
        content: [
          "Tables are essential for structured data in Word documents. python-docx provides a full-featured table API with support for styling, cell merging, column widths, and cell-level formatting.",
        ],
        code: `from docx import Document
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

doc = Document()
doc.add_heading("Working with Tables", level=1)

# --- Basic table ---
table = doc.add_table(rows=1, cols=4)
table.style = "Table Grid"

# Header row
header_cells = table.rows[0].cells
headers = ["Product", "Price", "Stock", "Category"]
for i, header in enumerate(headers):
    header_cells[i].text = header
    for paragraph in header_cells[i].paragraphs:
        for run in paragraph.runs:
            run.bold = True
            run.font.size = Pt(11)

# Data rows
data = [
    ["Laptop Pro", "1,299", "45", "Electronics"],
    ["Wireless Mouse", "29.99", "320", "Accessories"],
    ["USB-C Hub", "49.99", "150", "Accessories"],
    ["4K Monitor", "399.00", "28", "Electronics"],
]

for row_data in data:
    row = table.add_row().cells
    for i, value in enumerate(row_data):
        row[i].text = value
        if i in [1, 2]:
            row[i].paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.RIGHT

doc.add_paragraph()  # Spacer

# --- Styled table with built-in style ---
table2 = doc.add_table(rows=1, cols=3)
table2.style = "Light Shading Accent 1"
table2.alignment = WD_TABLE_ALIGNMENT.CENTER

hdr = table2.rows[0].cells
hdr[0].text = "Quarter"
hdr[1].text = "Revenue"
hdr[2].text = "Growth"

quarterly = [["Q1", "520K", "+8%"], ["Q2", "580K", "+12%"],
             ["Q3", "640K", "+10%"], ["Q4", "660K", "+3%"]]

for row_data in quarterly:
    cells = table2.add_row().cells
    for i, val in enumerate(row_data):
        cells[i].text = val

doc.add_paragraph()

# --- Table with cell background colors ---
def set_cell_background(cell, color_hex):
    """Set the background color of a table cell."""
    shading = cell._element.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:color"), "auto")
    shd.set(qn("w:fill"), color_hex)
    shading.append(shd)

doc.add_heading("Colored Header Table", level=2)
table3 = doc.add_table(rows=1, cols=3)
table3.style = "Table Grid"

for i, header in enumerate(["Name", "Department", "Role"]):
    cell = table3.rows[0].cells[i]
    cell.text = header
    set_cell_background(cell, "003366")
    for para in cell.paragraphs:
        para.alignment = WD_ALIGN_PARAGRAPH.CENTER
        for run in para.runs:
            run.bold = True
            run.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)

employees = [
    ["Alice Johnson", "Engineering", "Senior Developer"],
    ["Bob Smith", "Marketing", "Campaign Manager"],
    ["Carol Davis", "Sales", "Account Executive"],
]

for emp in employees:
    cells = table3.add_row().cells
    for i, val in enumerate(emp):
        cells[i].text = val

doc.save("tables_example.docx")`,
        table: {
          headers: ["Built-in Table Style", "Appearance", "Best For"],
          rows: [
            ["Table Grid", "Simple borders, no shading", "Basic data tables"],
            ["Light Shading Accent 1", "Light header, alternating rows", "Professional reports"],
            ["Medium Shading 1 Accent 1", "Bold colored header", "Emphasis tables"],
            ["Dark List Accent 1", "Dark header with strong banding", "High-contrast presentations"],
          ],
        },
      },
      {
        heading: "Adding Images",
        content: [
          "Images enhance documents with visual context — charts, logos, diagrams. python-docx supports adding images via add_picture(), which accepts a file path or file-like object.",
          "You can specify image width and height using the shared units. If you specify only one dimension, the other is calculated automatically to preserve the aspect ratio.",
        ],
        code: `from docx import Document
from docx.shared import Inches, Pt
from docx.enum.text import WD_ALIGN_PARAGRAPH

doc = Document()
doc.add_heading("Working with Images", level=1)

# --- Adding an image with a specific width ---
doc.add_picture("logo.png", width=Inches(2.0))

# Center the image
doc.paragraphs[-1].alignment = WD_ALIGN_PARAGRAPH.CENTER

doc.add_paragraph()

# --- Adding an image with both width and height ---
doc.add_picture("chart.png", width=Inches(5.0), height=Inches(3.5))

doc.add_paragraph()

# --- Image with a caption ---
doc.add_picture("diagram.png", width=Inches(4.5))
caption = doc.add_paragraph("Figure 1: System architecture overview.")
caption.alignment = WD_ALIGN_PARAGRAPH.CENTER
caption.runs[0].italic = True
caption.runs[0].font.size = Pt(10)

doc.add_paragraph()

# --- Image inside a table cell ---
table = doc.add_table(rows=1, cols=2)
table.style = "Table Grid"

table.rows[0].cells[0].text = "Product photo shown to the right."
paragraph = table.rows[0].cells[1].paragraphs[0]
run = paragraph.add_run()
run.add_picture("product.png", width=Inches(2.0))
paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER

doc.add_paragraph()

# --- Image from a file-like object (e.g., from a database) ---
from io import BytesIO

with open("logo.png", "rb") as f:
    image_bytes = f.read()

image_stream = BytesIO(image_bytes)
doc.add_picture(image_stream, width=Inches(1.5))

doc.save("images_example.docx")`,
        list: [
          "Supported formats: PNG, JPEG, GIF, BMP, TIFF",
          "Specify only width OR only height to auto-maintain aspect ratio",
          "Use Inches(), Cm(), Pt(), or Mm() for dimension units — never raw numbers",
          "To place an image in a table cell, use cell.paragraphs[0].add_run().add_picture()",
          "For images from databases/APIs, wrap bytes in BytesIO and pass the stream object",
        ],
      },
      {
        heading: "Headers, Footers, and Sections",
        content: [
          "Headers and footers appear at the top and bottom of every page in a section. They typically contain document titles, page numbers, dates, and confidentiality notices.",
          "A document can have multiple sections, each with its own page layout and its own headers and footers. By default, headers are linked to the previous section — set is_linked_to_previous = False to customize independently.",
        ],
        code: `from docx import Document
from docx.shared import Pt, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
from datetime import datetime

doc = Document()
section = doc.sections[0]

# --- Page setup ---
section.page_width = Inches(8.5)
section.page_height = Inches(11.0)
section.top_margin = Inches(1.0)
section.bottom_margin = Inches(1.0)
section.left_margin = Inches(1.0)
section.right_margin = Inches(1.0)

# --- Header ---
header = section.header
header.is_linked_to_previous = False
hp = header.paragraphs[0]
hp.text = "ACME Corporation - Confidential Report"
hp.alignment = WD_ALIGN_PARAGRAPH.CENTER
hp.runs[0].font.size = Pt(9)

# --- Footer ---
footer = section.footer
footer.is_linked_to_previous = False

# --- Different first page header/footer ---
section.different_first_page_header_footer = True
section.first_page_header.paragraphs[0].text = ""
section.first_page_footer.paragraphs[0].text = ""

# --- Adding page numbers to the footer ---
def add_page_number(paragraph):
    """Add a 'Page X of Y' field to a paragraph."""
    # "Page "
    paragraph.add_run("Page ")
    
    # PAGE field (current page)
    run = paragraph.add_run()
    fldChar1 = OxmlElement("w:fldChar")
    fldChar1.set(qn("w:fldCharType"), "begin")
    instrText = OxmlElement("w:instrText")
    instrText.set(qn("xml:space"), "preserve")
    instrText.text = "PAGE"
    fldChar2 = OxmlElement("w:fldChar")
    fldChar2.set(qn("w:fldCharType"), "end")
    run._r.append(fldChar1)
    run._r.append(instrText)
    run._r.append(fldChar2)
    
    # " of "
    paragraph.add_run(" of ")
    
    # NUMPAGES field (total pages)
    run2 = paragraph.add_run()
    fldChar3 = OxmlElement("w:fldChar")
    fldChar3.set(qn("w:fldCharType"), "begin")
    instrText2 = OxmlElement("w:instrText")
    instrText2.set(qn("xml:space"), "preserve")
    instrText2.text = "NUMPAGES"
    fldChar4 = OxmlElement("w:fldChar")
    fldChar4.set(qn("w:fldCharType"), "end")
    run2._r.append(fldChar3)
    run2._r.append(instrText2)
    run2._r.append(fldChar4)

footer_p = footer.paragraphs[0]
footer_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
add_page_number(footer_p)

# --- Add content ---
doc.add_heading("Report Title", level=0)
doc.add_paragraph(
    "This document has custom headers and footers on every page."
)
for i in range(1, 6):
    doc.add_heading(f"Section {i}", level=1)
    doc.add_paragraph(f"Content for section {i}. " + "Lorem ipsum. " * 10)

doc.save("headers_footers.docx")`,
        table: {
          headers: ["Section Property", "Type", "Description", "Example"],
          rows: [
            ["page_width", "Length", "Page width", "Inches(8.5)"],
            ["page_height", "Length", "Page height", "Inches(11.0)"],
            ["top_margin", "Length", "Top margin", "Inches(1.0)"],
            ["different_first_page_header_footer", "bool", "Unique first-page header", "True/False"],
            ["header.is_linked_to_previous", "bool", "Inherit header from prior section", "True/False"],
          ],
        },
      },
      {
        heading: "Reading and Editing Existing Documents",
        content: [
          "python-docx can also open, read, and modify existing .docx files. This is invaluable for automating document workflows: filling in templates, updating reports, extracting content, or batch-processing form letters.",
        ],
        code: `from docx import Document
from docx.shared import Pt, RGBColor
from copy import deepcopy

# --- Open an existing document ---
doc = Document("existing_report.docx")

# --- Read all paragraphs ---
print(f"Total paragraphs: {len(doc.paragraphs)}")
for i, para in enumerate(doc.paragraphs):
    style_name = para.style.name if para.style else "None"
    print(f"  [{i}] ({style_name}): {para.text[:80]}")

# --- Read all tables ---
print(f"\\nTotal tables: {len(doc.tables)}")
for t_idx, table in enumerate(doc.tables):
    print(f"  Table {t_idx}: {len(table.rows)} rows x {len(table.columns)} cols")
    for r_idx, row in enumerate(table.rows):
        row_text = [cell.text for cell in row.cells]
        print(f"    Row {r_idx}: {row_text}")

# --- Find and replace text ---
def find_and_replace(doc, old_text, new_text):
    """Replace all occurrences of old_text with new_text."""
    for paragraph in doc.paragraphs:
        for run in paragraph.runs:
            if old_text in run.text:
                run.text = run.text.replace(old_text, new_text)
    
    # Also replace in tables
    for table in doc.tables:
        for row in table.rows:
            for cell in row.cells:
                for paragraph in cell.paragraphs:
                    for run in paragraph.runs:
                        if old_text in run.text:
                            run.text = run.text.replace(old_text, new_text)

# Replace placeholder text (useful for templates)
find_and_replace(doc, "[DATE]", "December 15, 2024")
find_and_replace(doc, "[CLIENT_NAME]", "Acme Industries")

# --- Append content to an existing document ---
doc.add_heading("Appendix: Additional Notes", level=1)
doc.add_paragraph("This section was added programmatically.")

# --- Insert a paragraph at a specific position ---
def insert_paragraph_after(paragraph, text=None, style=None):
    """Insert a new paragraph after the given paragraph."""
    new_p = deepcopy(paragraph._element)
    paragraph._element.addnext(new_p)
    new_para = paragraph.__class__(new_p, paragraph._parent)
    if text:
        new_para.text = text
    if style:
        new_para.style = style
    return new_para

for para in doc.paragraphs:
    if "Executive Summary" in para.text:
        insert_paragraph_after(para, "Inserted after Executive Summary.", "Normal")
        break

doc.save("modified_report.docx")

# --- Template-based document generation ---
def generate_letter(template_path, output_path, replacements):
    """Generate a personalized letter from a template."""
    doc = Document(template_path)
    for placeholder, value in replacements.items():
        find_and_replace(doc, placeholder, value)
    doc.save(output_path)

recipients = [
    {"[NAME]": "John Smith", "[COMPANY]": "TechCorp"},
    {"[NAME]": "Jane Doe", "[COMPANY]": "DataInc"},
    {"[NAME]": "Bob Wilson", "[COMPANY]": "CloudSoft"},
]

for i, recipient in enumerate(recipients):
    generate_letter("letter_template.docx", f"letter_{i+1}.docx", recipient)
    print(f"Generated letter_{i+1}.docx")`,
        list: [
          "Document('file.docx') opens an existing file — all content is accessible",
          "doc.paragraphs gives all body paragraphs; doc.tables gives all tables",
          "find_and_replace() works on single runs — text split across runs needs more complex handling",
          "Template-based generation is powerful for mail merge — create one template, fill many times",
        ],
      },
      {
        heading: "Complete Example: Professional Report Generator",
        content: [
          "Let's bring everything together into a complete, production-ready document generator that creates a professional report with a cover page, styled headings, a data table, headers with page numbers, and proper formatting throughout.",
        ],
        code: `from docx import Document
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
from datetime import datetime
import os

def set_cell_background(cell, color_hex):
    shading = cell._element.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:color"), "auto")
    shd.set(qn("w:fill"), color_hex)
    shading.append(shd)

def add_page_number_field(paragraph):
    paragraph.add_run("Page ")
    run = paragraph.add_run()
    fldChar1 = OxmlElement("w:fldChar")
    fldChar1.set(qn("w:fldCharType"), "begin")
    instrText = OxmlElement("w:instrText")
    instrText.set(qn("xml:space"), "preserve")
    instrText.text = "PAGE"
    fldChar2 = OxmlElement("w:fldChar")
    fldChar2.set(qn("w:fldCharType"), "end")
    run._r.append(fldChar1)
    run._r.append(instrText)
    run._r.append(fldChar2)
    paragraph.add_run(" of ")
    run2 = paragraph.add_run()
    fldChar3 = OxmlElement("w:fldChar")
    fldChar3.set(qn("w:fldCharType"), "begin")
    instrText2 = OxmlElement("w:instrText")
    instrText2.set(qn("xml:space"), "preserve")
    instrText2.text = "NUMPAGES"
    fldChar4 = OxmlElement("w:fldChar")
    fldChar4.set(qn("w:fldCharType"), "end")
    run2._r.append(fldChar3)
    run2._r.append(instrText2)
    run2._r.append(fldChar4)

def generate_professional_report(output_path, report_data):
    """Generate a complete professional Word document report."""
    os.makedirs(os.path.dirname(output_path) or ".", exist_ok=True)
    doc = Document()
    
    # Page setup
    section = doc.sections[0]
    section.page_width = Inches(8.5)
    section.page_height = Inches(11.0)
    section.top_margin = Inches(1.0)
    section.bottom_margin = Inches(1.0)
    section.left_margin = Inches(1.0)
    section.right_margin = Inches(1.0)
    section.different_first_page_header_footer = True
    
    # Header (non-first-page)
    header = section.header
    header.is_linked_to_previous = False
    hp = header.paragraphs[0]
    hp.text = report_data.get("header_text", "Report")
    hp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    hp.runs[0].font.size = Pt(9)
    hp.runs[0].font.color.rgb = RGBColor(0x80, 0x80, 0x80)
    
    # Footer with page numbers
    footer = section.footer
    footer.is_linked_to_previous = False
    fp = footer.paragraphs[0]
    fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    add_page_number_field(fp)
    
    # Clear first-page header/footer
    section.first_page_header.paragraphs[0].text = ""
    section.first_page_footer.paragraphs[0].text = ""
    
    # Modify default styles
    normal = doc.styles["Normal"]
    normal.font.name = "Calibri"
    normal.font.size = Pt(11)
    heading1 = doc.styles["Heading 1"]
    heading1.font.color.rgb = RGBColor(0x00, 0x33, 0x66)
    
    # Cover Page
    for _ in range(6):
        doc.add_paragraph()
    
    title_para = doc.add_paragraph(report_data["title"])
    title_para.alignment = WD_ALIGN_PARAGRAPH.CENTER
    title_para.runs[0].font.size = Pt(28)
    title_para.runs[0].font.bold = True
    title_para.runs[0].font.color.rgb = RGBColor(0x00, 0x33, 0x66)
    
    subtitle_para = doc.add_paragraph(report_data.get("subtitle", ""))
    subtitle_para.alignment = WD_ALIGN_PARAGRAPH.CENTER
    subtitle_para.runs[0].font.size = Pt(14)
    
    doc.add_page_break()
    
    # Content Sections
    for idx, section_data in enumerate(report_data.get("sections", []), 1):
        doc.add_heading(f"{idx}. {section_data['heading']}", level=1)
        for para_text in section_data.get("paragraphs", []):
            doc.add_paragraph(para_text)
        for bullet in section_data.get("bullets", []):
            doc.add_paragraph(bullet, style="List Bullet")
    
    # Data Table
    table_info = report_data.get("table")
    if table_info:
        doc.add_heading(f"{len(report_data.get('sections', [])) + 1}. {table_info['title']}", level=1)
        table = doc.add_table(rows=1, cols=len(table_info["headers"]))
        table.style = "Table Grid"
        table.alignment = WD_TABLE_ALIGNMENT.CENTER
        
        for i, h in enumerate(table_info["headers"]):
            cell = table.rows[0].cells[i]
            cell.text = h
            set_cell_background(cell, "003366")
            for para in cell.paragraphs:
                para.alignment = WD_ALIGN_PARAGRAPH.CENTER
                for run in para.runs:
                    run.bold = True
                    run.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
        
        for r_idx, row_data in enumerate(table_info["rows"]):
            row = table.add_row()
            for c_idx, value in enumerate(row_data):
                cell = row.cells[c_idx]
                cell.text = str(value)
                if r_idx % 2 == 1:
                    set_cell_background(cell, "F0F0F5")
    
    # Conclusion
    doc.add_heading("Conclusion", level=1)
    doc.add_paragraph(report_data.get("conclusion", "End of report."))
    
    doc.save(output_path)
    print(f"Report generated: {output_path}")

# Usage
generate_professional_report("output/report.docx", {
    "title": "Data Analysis Report",
    "subtitle": "Q3 2024 Customer Insights",
    "header_text": "Data Analysis Report - Q3 2024",
    "sections": [
        {"heading": "Executive Summary", "paragraphs": [
            "Revenue grew 15% with 22% increase in customer engagement."
        ], "bullets": [
            "Customer engagement increased by 22%",
            "Average order value rose from 85 to 97.75",
            "Mobile traffic accounts for 68% of visits",
        ]},
        {"heading": "Methodology", "paragraphs": [
            "Data was collected from three sources and analyzed with Python."
        ]},
    ],
    "table": {
        "title": "Sales by Product Category",
        "headers": ["Category", "Units", "Revenue", "Growth"],
        "rows": [
            ["Electronics", "12,400", "620,000", "+18%"],
            ["Apparel", "8,900", "267,000", "+12%"],
            ["Home Goods", "6,200", "186,000", "+8%"],
        ]
    },
    "conclusion": "Q3 2024 delivered strong results across all metrics."
})`,
        list: [
          "This generator is reusable — pass different report_data dicts to produce different reports",
          "Page number fields use Word's native PAGE and NUMPAGES field codes — they update in Word",
          "Cell background colors require direct XML manipulation via the w:shd element",
          "Use different_first_page_header_footer = True for a clean cover page with no header/footer",
          "This pattern works in web apps (Flask/Django/FastAPI), CLI tools, and automated pipelines",
        ],
      },
    ],
  },

  {
    id: "beautifulsoup-tutorial",
    title: "BeautifulSoup Tutorial: Web Scraping with Python",
    category: "Web Scraping",
    icon: "Globe",
    description: "A complete guide to web scraping with BeautifulSoup4 — parsing HTML, finding elements, navigating the parse tree, extracting text and attributes, handling errors, and scraping multiple pages with practical examples from basic to advanced.",
    level: "Beginner",
    estimatedTime: "50 min read",
    sections: [
      {
        heading: "Introduction to BeautifulSoup",
        content: [
          "BeautifulSoup is the most popular Python library for parsing HTML and XML documents. It creates a parse tree from the page source that you can navigate, search, and modify — making web scraping accessible even for beginners.",
          "BeautifulSoup does not download web pages itself — you pair it with a library like Requests to fetch the HTML, then pass that HTML to BeautifulSoup for parsing and extraction.",
        ],
        list: [
          "BeautifulSoup parses HTML/XML and creates a searchable tree",
          "Works with Python's built-in html.parser, or faster parsers like lxml and html5lib",
          "Does NOT download pages — pair with Requests for fetching HTML",
          "Ideal for static websites where content is in the initial HTML source",
        ],
      },
      {
        heading: "Installation and Setup",
        content: [
          "BeautifulSoup4 is available on PyPI as bs4. You also need a parser (lxml is recommended for speed) and the Requests library for downloading pages.",
        ],
        code: `# Install BeautifulSoup4, lxml (fast parser), and requests
pip install beautifulsoup4 lxml requests

# Verify installation
python -c "from bs4 import BeautifulSoup; print('BeautifulSoup OK')"

# Basic usage pattern
import requests
from bs4 import BeautifulSoup

response = requests.get("https://quotes.toscrape.com/")
soup = BeautifulSoup(response.text, "lxml")
print(soup.title.text)`,
      },
      {
        heading: "Finding Elements: find() and find_all()",
        content: [
          "The two most used BeautifulSoup methods are find() (returns the first matching element) and find_all() (returns a list of all matching elements). You can search by tag name, attributes, class, id, text content, or any combination.",
        ],
        code: `from bs4 import BeautifulSoup
import requests

soup = BeautifulSoup(requests.get("https://quotes.toscrape.com/").text, "lxml")

# find_all: get all elements matching a tag
quotes = soup.find_all("span", class_="text")
for quote in quotes:
    print(quote.text)

# find: get the first matching element
first_quote = soup.find("span", class_="text")
print(first_quote.text)

# Searching by multiple attributes
quote_divs = soup.find_all("div", class_="quote")

# Find by id
login_link = soup.find("a", id="login")

# Limit results
first_3 = soup.find_all("span", class_="text", limit=3)

# Searching by text content with regex
import re
elements_with_love = soup.find_all(text=re.compile("love", re.I))`,
        table: {
          headers: ["Method", "Returns", "Use Case", "Example"],
          rows: [
            ["find()", "First matching element", "When you need one element", "soup.find('h1')"],
            ["find_all()", "List of all matches", "When you need multiple elements", "soup.find_all('p')"],
            ["find_next()", "Next sibling element", "Navigating forward", "element.find_next('p')"],
            ["find_parent()", "Parent element", "Going up the tree", "element.find_parent('div')"],
          ],
        },
      },
      {
        heading: "CSS Selectors: select() and select_one()",
        content: [
          "BeautifulSoup also supports CSS selectors through select() (returns a list) and select_one() (returns the first match). CSS selectors are often more concise and familiar if you know CSS.",
        ],
        code: `from bs4 import BeautifulSoup
import requests

soup = BeautifulSoup(requests.get("https://quotes.toscrape.com/").text, "lxml")

# Tag selector
quotes = soup.select("span.text")

# Class selector (dot notation)
quote_spans = soup.select(".text")

# ID selector (hash notation)
content = soup.select("#content")

# Descendant selector (space)
spans_in_quotes = soup.select("div.quote span.text")

# Direct child selector (>)
top_items = soup.select("div.quote > div")

# Attribute selector
tags = soup.select('a[href]')

# Multiple selectors (comma)
headings = soup.select("h1, h2, h3")

# select_one for first match
title = soup.select_one("h1")`,
        list: [
          "select() returns a list — empty list if none found",
          "select_one() returns the first match or None",
          "CSS selectors use . for class and # for id",
          "Descendant selector (space) finds at any depth; child selector (>) finds direct children only",
        ],
      },
      {
        heading: "Navigating the Parse Tree",
        content: [
          "BeautifulSoup represents HTML as a tree of Tag objects. You can navigate this tree using properties like parent, children, next_sibling, previous_sibling.",
        ],
        code: `from bs4 import BeautifulSoup

html = """
<div id="main">
  <h1>Title</h1>
  <p class="intro">Introduction</p>
  <ul><li>Item 1</li><li>Item 2</li></ul>
</div>
"""
soup = BeautifulSoup(html, "lxml")
div = soup.find("div", id="main")

# Navigating down
print(div.h1.text)        # "Title"
print(div.p.text)         # "Introduction"

# .children iterates direct children
for child in div.children:
    if child.name:
        print(f"Tag: {child.name}")

# .descendants iterates ALL descendants (recursive)
for desc in div.descendants:
    if desc.name:
        print(f"Descendant: {desc.name}")

# Navigating up
p = soup.find("p", class_="intro")
print(p.parent.name)          # "div"
print(p.parent["id"])         # "main"

# Navigating sideways (siblings)
h1 = soup.find("h1")
next_elem = h1.find_next_sibling()
print(next_elem.name)         # "p"

# Working with list items
ul = soup.find("ul")
for li in ul.find_all("li"):
    print(li.text)`,
        table: {
          headers: ["Property", "Direction", "Returns", "Notes"],
          rows: [
            [".parent", "Up", "Parent tag", "One level up"],
            [".children", "Down", "Iterator of direct children", "One level down"],
            [".descendants", "Down", "Iterator of all descendants", "Recursive"],
            [".next_sibling", "Sideways", "Next sibling", "Includes whitespace"],
            ["find_next_sibling()", "Sideways", "Next tag sibling", "Skips whitespace"],
          ],
        },
      },
      {
        heading: "Extracting Text and Attributes",
        content: [
          "Once you find the right elements, you need to extract their content. BeautifulSoup provides .text (or .get_text()) for text content and dictionary-style access for attributes.",
        ],
        code: `from bs4 import BeautifulSoup
import requests

soup = BeautifulSoup(requests.get("https://quotes.toscrape.com/").text, "lxml")

# Extracting text
quote = soup.find("span", class_="text")
print(quote.text)
print(quote.get_text(strip=True))

# get_text with separator for nested elements
div = soup.find("div", class_="quote")
print(div.get_text(separator=" | ", strip=True))

# Extracting attributes
links = soup.find_all("a")
for link in links:
    href = link.get("href")     # Returns None if missing
    text = link.text
    print(f"{text}: {href}")

# Getting specific attributes
img = soup.find("img")
if img:
    src = img.get("src")
    alt = img.get("alt", "No alt text")  # Default value

# Getting all attributes
tag_div = soup.find("div", class_="quote")
print(tag_div.attrs)  # Dict of all attributes

# class attribute returns a list
print(tag_div.get("class"))  # ['quote']`,
        list: [
          "Use .get('attr') instead of ['attr'] to avoid KeyError on missing attributes",
          ".get_text(strip=True) removes leading/trailing whitespace",
          ".get_text(separator=' | ') joins nested text with a separator",
          "class attribute always returns a list since elements can have multiple classes",
        ],
      },
      {
        heading: "Real-World Example: Scraping quotes.toscrape.com",
        content: [
          "Let's put it all together by scraping quotes from quotes.toscrape.com — a sandbox site designed for learning web scraping. We will scrape quotes, authors, and tags from multiple pages.",
        ],
        code: `import requests
from bs4 import BeautifulSoup
import csv

base_url = "https://quotes.toscrape.com/page/{}/"
all_quotes = []

for page_num in range(1, 11):
    print(f"Scraping page {page_num}...")
    url = base_url.format(page_num)
    response = requests.get(url)
    
    if response.status_code != 200:
        break
    
    soup = BeautifulSoup(response.text, "lxml")
    quote_blocks = soup.find_all("div", class_="quote")
    
    if not quote_blocks:
        break
    
    for block in quote_blocks:
        text = block.find("span", class_="text").get_text(strip=True)
        author = block.find("small", class_="author").get_text(strip=True)
        tags = [t.get_text(strip=True) for t in block.find_all("a", class_="tag")]
        all_quotes.append({"text": text, "author": author, "tags": ", ".join(tags)})

print(f"Total quotes scraped: {len(all_quotes)}")

# Save to CSV
with open("quotes.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["text", "author", "tags"])
    writer.writeheader()
    writer.writerows(all_quotes)`,
      },
      {
        heading: "Handling Errors and Pagination",
        content: [
          "Real websites are messy — elements may be missing, pages may return errors, and servers may block scrapers. Proper error handling and pagination logic makes your scraper robust.",
        ],
        code: `import requests
from bs4 import BeautifulSoup
import time
from urllib.parse import urljoin

def safe_scrape(url):
    """Scrape a URL with proper error handling."""
    headers = {"User-Agent": "Mozilla/5.0 (compatible; MyScraper/1.0)"}
    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
    except requests.Timeout:
        print(f"Timeout: {url}")
        return None
    except requests.ConnectionError:
        print(f"Connection error: {url}")
        return None
    except requests.HTTPError as e:
        print(f"HTTP error {e.response.status_code}: {url}")
        return None
    
    return BeautifulSoup(response.text, "lxml")

# Scraping with pagination
def scrape_all_pages(base_url, delay=1.0, max_pages=50):
    all_data = []
    url = base_url
    
    while url and len(all_data) < max_pages * 10:
        soup = safe_scrape(url)
        if not soup:
            break
        
        for item in soup.find_all("div", class_="quote"):
            text = item.find("span", class_="text")
            author = item.find("small", class_="author")
            if text and author:
                all_data.append({"quote": text.get_text(strip=True),
                                 "author": author.get_text(strip=True)})
        
        # Find next page link
        next_link = soup.find("li", class_="next")
        if next_link and next_link.find("a"):
            url = urljoin(base_url, next_link.find("a").get("href"))
        else:
            url = None
        
        if url:
            time.sleep(delay)
    
    return all_data

data = scrape_all_pages("https://quotes.toscrape.com/")
print(f"Scraped {len(data)} quotes")`,
        list: [
          "Always set a User-Agent header — some sites block requests without one",
          "Use timeout=10 to avoid hanging on unresponsive servers",
          "Use time.sleep(1.0) between requests to avoid overwhelming the server",
          "Look for 'next' links to find the next page automatically",
          "Use urllib.parse.urljoin() to convert relative URLs to absolute URLs",
        ],
      },
    ],
  },

  {
    id: "matplotlib-tutorial",
    title: "Matplotlib Tutorial: Data Visualization with Python",
    category: "Data Visualization",
    icon: "BarChart3",
    description: "A complete guide to data visualization with Matplotlib — from basic line plots to advanced charts. Learn to create bar charts, scatter plots, histograms, pie charts, subplots, customize colors and styles, and save publication-ready figures with practical examples.",
    level: "Beginner",
    estimatedTime: "60 min read",
    sections: [
      {
        heading: "Introduction to Matplotlib",
        content: [
          "Matplotlib is the foundational data visualization library in Python. It provides complete control over every element of a plot — from line styles and colors to axes, labels, legends, and annotations. Nearly every other Python visualization library builds on or complements Matplotlib.",
        ],
        list: [
          "Most widely used Python visualization library",
          "Two interfaces: pyplot (quick, MATLAB-like) and object-oriented (powerful, flexible)",
          "Supports line, bar, scatter, histogram, pie, box, violin, heatmap, 3D plots",
          "Outputs can be saved as PNG, PDF, SVG, and other formats",
        ],
      },
      {
        heading: "Installation and Setup",
        content: [
          "Matplotlib is available on PyPI. If you are using it with Jupyter notebooks, include the %matplotlib inline magic command.",
        ],
        code: `pip install matplotlib numpy

# Standard imports
import matplotlib.pyplot as plt
import numpy as np

# Set a style (optional but recommended)
plt.style.use("seaborn-v0_8-darkgrid")`,
        table: {
          headers: ["Style Name", "Appearance", "Best For"],
          rows: [
            ["default", "Classic Matplotlib look", "General purpose"],
            ["seaborn-v0_8-darkgrid", "Dark grid, clean", "Presentations, reports"],
            ["ggplot", "R ggplot2 style", "Statistical plots"],
            ["fivethirtyeight", "FiveThirtyEight style", "Data journalism"],
            ["dark_background", "Dark theme", "Dark presentations"],
          ],
        },
      },
      {
        heading: "Basic Line Plots",
        content: [
          "Line plots are the most fundamental visualization — showing how a variable changes over time or another continuous axis.",
        ],
        code: `import matplotlib.pyplot as plt
import numpy as np

# Simple line plot
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.plot(x, y)
plt.title("Sine Wave")
plt.xlabel("X axis")
plt.ylabel("Y axis")
plt.show()

# Multiple lines on one plot
x = np.linspace(0, 10, 100)
plt.plot(x, np.sin(x), label="sin(x)", color="blue", linewidth=2)
plt.plot(x, np.cos(x), label="cos(x)", color="red", linewidth=2, linestyle="--")
plt.plot(x, np.sin(x) * np.exp(-x/5), label="damped", color="green", linestyle=":")

plt.title("Trigonometric Functions")
plt.xlabel("X")
plt.ylabel("Y")
plt.legend(loc="upper right")
plt.grid(True, alpha=0.3)
plt.show()`,
        list: [
          "plt.plot(x, y) creates a line plot — x is optional (defaults to 0, 1, 2...)",
          "Format string: 'r-' = red solid, 'b--' = blue dashed, 'g.' = green dots",
          "label= sets the legend text — call plt.legend() to display it",
          "linewidth= controls line thickness; linestyle= controls line pattern",
        ],
      },
      {
        heading: "Bar Charts and Scatter Plots",
        content: [
          "Bar charts compare categorical data, while scatter plots show relationships between two numeric variables.",
        ],
        code: `import matplotlib.pyplot as plt
import numpy as np

# Vertical bar chart
categories = ["Q1", "Q2", "Q3", "Q4"]
values = [250, 320, 410, 380]
colors = ["#3498db", "#2ecc71", "#e74c3c", "#f39c12"]

plt.figure(figsize=(8, 5))
bars = plt.bar(categories, values, color=colors, edgecolor="black")

# Add value labels on top of bars
for bar, val in zip(bars, values):
    plt.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 5,
             str(val), ha="center", va="bottom", fontweight="bold")

plt.title("Quarterly Sales")
plt.xlabel("Quarter")
plt.ylabel("Sales ($1000)")
plt.show()

# Scatter plot
np.random.seed(42)
x = np.random.randn(200)
y = x * 0.8 + np.random.randn(200) * 0.5

plt.figure(figsize=(8, 6))
plt.scatter(x, y, c=np.random.rand(200), s=np.random.randint(20, 200, 200),
            alpha=0.6, cmap="viridis", edgecolors="black")
plt.colorbar(label="Value")
plt.title("Scatter Plot")
plt.xlabel("X")
plt.ylabel("Y")
plt.show()`,
        table: {
          headers: ["Chart Type", "Function", "Best For", "Key Parameters"],
          rows: [
            ["Vertical bar", "plt.bar()", "Comparing categories", "color, edgecolor, width"],
            ["Horizontal bar", "plt.barh()", "Long category names", "color, height"],
            ["Scatter", "plt.scatter()", "Relationships", "c, s, alpha, cmap"],
            ["Bubble", "plt.scatter() with s=", "3 variables in 2D", "s for size, c for color"],
          ],
        },
      },
      {
        heading: "Histograms and Pie Charts",
        content: [
          "Histograms show the distribution of a single numeric variable, while pie charts show proportions of a whole.",
        ],
        code: `import matplotlib.pyplot as plt
import numpy as np

# Histogram
np.random.seed(42)
data = np.random.normal(100, 15, 1000)

plt.figure(figsize=(8, 5))
plt.hist(data, bins=30, color="#3498db", edgecolor="black", alpha=0.7)
plt.axvline(np.mean(data), color="red", linestyle="--", linewidth=2,
            label=f"Mean = {np.mean(data):.1f}")
plt.title("Distribution of Test Scores")
plt.xlabel("Score")
plt.ylabel("Frequency")
plt.legend()
plt.show()

# Pie chart
categories = ["Electronics", "Clothing", "Books", "Food", "Other"]
values = [35, 25, 15, 20, 5]
colors = ["#3498db", "#2ecc71", "#e74c3c", "#f39c12", "#9b59b6"]
explode = [0.05, 0, 0, 0, 0]

plt.figure(figsize=(8, 8))
plt.pie(values, labels=categories, colors=colors, explode=explode,
        autopct="%1.1f%%", shadow=True, startangle=90)
plt.title("Revenue by Category")
plt.axis("equal")
plt.show()`,
        list: [
          "hist() bins parameter controls the number of intervals",
          "alpha=0.6 makes bars semi-transparent for overlapping histograms",
          "axvline() adds vertical lines for mean or median",
          "autopct='%1.1f%%' shows percentage values on pie slices",
          "plt.axis('equal') ensures pie charts are circular",
        ],
      },
      {
        heading: "Subplots: Multiple Plots in One Figure",
        content: [
          "Subplots let you display multiple plots in a single figure — essential for comparing datasets or showing different views side by side.",
        ],
        code: `import matplotlib.pyplot as plt
import numpy as np

# Method 1: plt.subplot (pyplot interface)
plt.figure(figsize=(12, 8))

plt.subplot(2, 2, 1)
x = np.linspace(0, 10, 100)
plt.plot(x, np.sin(x), "b-")
plt.title("Sine Wave")

plt.subplot(2, 2, 2)
plt.plot(x, np.cos(x), "r-")
plt.title("Cosine Wave")

plt.subplot(2, 2, 3)
plt.hist(np.random.randn(1000), bins=30, color="green", alpha=0.7)
plt.title("Histogram")

plt.subplot(2, 2, 4)
plt.scatter(np.random.rand(50), np.random.rand(50), c="purple", alpha=0.6)
plt.title("Scatter Plot")

plt.suptitle("Four Subplots Example", fontsize=16)
plt.tight_layout()
plt.show()

# Method 2: Object-oriented (recommended)
fig, axes = plt.subplots(2, 2, figsize=(10, 8))
axes[0, 0].plot(x, np.sin(x), "b-")
axes[0, 0].set_title("sin(x)")
axes[0, 1].plot(x, np.cos(x), "r-")
axes[0, 1].set_title("cos(x)")
axes[1, 0].hist(np.random.randn(500), bins=20)
axes[1, 0].set_title("Histogram")
axes[1, 1].scatter(np.random.rand(50), np.random.rand(50))
axes[1, 1].set_title("Scatter")

fig.suptitle("Object-Oriented Subplots", fontsize=16)
plt.tight_layout()
plt.show()`,
        list: [
          "plt.subplot(rows, cols, index) uses 1-based indexing",
          "fig, axes = plt.subplots(r, c) returns an array of Axes objects",
          "Use fig.suptitle() for overall title, ax.set_title() for individual titles",
          "plt.tight_layout() prevents label overlap between subplots",
        ],
      },
      {
        heading: "Customizing Plots",
        content: [
          "Professional plots require fine-grained control over annotations, axis ranges, tick marks, legends, and more.",
        ],
        code: `import matplotlib.pyplot as plt
import numpy as np

fig, ax = plt.subplots(figsize=(10, 6))
x = np.linspace(0, 10, 100)
y = np.sin(x) * np.exp(-x/5)

ax.plot(x, y, "b-", linewidth=2, label="damped sin(x)")
ax.fill_between(x, y, alpha=0.2, color="blue")

# Annotate the maximum point
max_idx = np.argmax(y)
ax.annotate(f"Max: ({x[max_idx]:.1f}, {y[max_idx]:.2f})",
            xy=(x[max_idx], y[max_idx]),
            xytext=(x[max_idx] + 1, y[max_idx] + 0.1),
            arrowprops=dict(arrowstyle="->", color="red"),
            fontsize=11, color="red")

# Customize axes
ax.set_xlim(0, 10)
ax.set_ylim(-0.5, 1.0)
ax.grid(True, alpha=0.3, linestyle="--")
ax.spines["top"].set_visible(False)
ax.spines["right"].set_visible(False)

ax.set_xlabel("Time (seconds)", fontsize=12)
ax.set_ylabel("Amplitude", fontsize=12)
ax.set_title("Damped Sine Wave", fontsize=14, fontweight="bold")
ax.legend(loc="upper right", fancybox=True, shadow=True)

plt.tight_layout()
plt.show()`,
        table: {
          headers: ["Customization", "Method", "Example"],
          rows: [
            ["Axis limits", "set_xlim(), set_ylim()", "ax.set_xlim(0, 10)"],
            ["Tick marks", "set_xticks(), set_yticks()", "ax.set_xticks([0, 5, 10])"],
            ["Annotation", "annotate()", "ax.annotate(text, xy, xytext, arrowprops)"],
            ["Fill between", "fill_between()", "ax.fill_between(x, y, alpha=0.2)"],
            ["Remove spines", "spines['top'].set_visible(False)", "Cleaner look"],
            ["Twin axes", "twinx()", "ax2 = ax1.twinx() for dual y-axis"],
          ],
        },
      },
      {
        heading: "Advanced Plots: Box, Violin, Heatmap",
        content: [
          "Beyond the basics, Matplotlib supports statistical plots and matrix visualizations essential for data analysis.",
        ],
        code: `import matplotlib.pyplot as plt
import numpy as np

# Box plot
np.random.seed(42)
data = [np.random.normal(50, 10, 200), np.random.normal(60, 15, 200),
        np.random.normal(45, 8, 200), np.random.normal(55, 20, 200)]

fig, ax = plt.subplots(figsize=(8, 5))
box = ax.boxplot(data, labels=["A", "B", "C", "D"],
                 patch_artist=True, showmeans=True, meanline=True)
colors = ["#3498db", "#2ecc71", "#e74c3c", "#f39c12"]
for patch, color in zip(box["boxes"], colors):
    patch.set_facecolor(color)
    patch.set_alpha(0.6)
ax.set_title("Box Plot Comparison")
ax.grid(True, alpha=0.3, axis="y")
plt.show()

# Heatmap
data = np.random.rand(10, 12)
fig, ax = plt.subplots(figsize=(10, 6))
im = ax.imshow(data, cmap="YlOrRd", aspect="auto")
plt.colorbar(im, ax=ax, label="Value")

ax.set_xticks(range(12))
ax.set_xticklabels([f"Col {i+1}" for i in range(12)], rotation=45, ha="right")
ax.set_yticks(range(10))
ax.set_yticklabels([f"Row {i+1}" for i in range(10)])

for i in range(10):
    for j in range(12):
        ax.text(j, i, f"{data[i, j]:.2f}", ha="center", va="center",
                fontsize=8, color="white" if data[i, j] > 0.5 else "black")

ax.set_title("Heatmap with Annotations")
plt.tight_layout()
plt.show()`,
        list: [
          "Box plots show median, quartiles, whiskers, and outliers",
          "imshow() displays matrix data as a heatmap — use cmap for color mapping",
          "Add ax.text() for cell value annotations in heatmaps",
          "patch_artist=True in boxplot allows coloring the boxes",
        ],
      },
      {
        heading: "Saving and Exporting Plots",
        content: [
          "Once your plot looks great, save it. Matplotlib supports many output formats with control over DPI and quality.",
        ],
        code: `import matplotlib.pyplot as plt
import numpy as np

fig, ax = plt.subplots(figsize=(8, 5))
x = np.linspace(0, 10, 100)
ax.plot(x, np.sin(x), label="sin(x)")
ax.plot(x, np.cos(x), label="cos(x)")
ax.set_title("Trig Functions")
ax.legend()
ax.grid(True, alpha=0.3)

# Save as PNG (raster, good for web)
fig.savefig("plot.png", dpi=150, bbox_inches="tight", facecolor="white")

# Save as PDF (vector, good for printing)
fig.savefig("plot.pdf", bbox_inches="tight")

# Save as SVG (vector, good for web/editing)
fig.savefig("plot.svg", bbox_inches="tight")

# High-resolution PNG (good for print)
fig.savefig("plot_hd.png", dpi=300, bbox_inches="tight")

# Transparent background
fig.savefig("plot_transparent.png", dpi=150, transparent=True)

plt.show()`,
        table: {
          headers: ["Format", "Type", "Best For", "DPI"],
          rows: [
            ["PNG", "Raster", "Web, presentations", "150 (screen), 300 (print)"],
            ["PDF", "Vector", "Print, reports", "Scales infinitely"],
            ["SVG", "Vector", "Web, editing", "Scales infinitely"],
            ["EPS", "Vector", "Academic papers", "Scales infinitely"],
          ],
        },
      },
      {
        heading: "Complete Example: Analytics Dashboard",
        content: [
          "Let's combine everything into a professional data analysis dashboard with multiple chart types and a cohesive style.",
        ],
        code: `import matplotlib.pyplot as plt
import numpy as np

plt.style.use("seaborn-v0_8-darkgrid")

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
rev_2023 = [45, 52, 48, 61, 55, 67, 72, 68, 75, 70, 82, 95]
rev_2024 = [55, 62, 58, 71, 68, 80, 85, 82, 90, 88, 100, 115]

fig = plt.figure(figsize=(16, 10))
fig.suptitle("Business Analytics Dashboard - 2024", fontsize=18, fontweight="bold")

# 1. Line chart: Revenue trend
ax1 = plt.subplot(2, 2, 1)
ax1.plot(months, rev_2023, "o--", color="gray", label="2023", alpha=0.7)
ax1.plot(months, rev_2024, "s-", color="#2ecc71", label="2024", linewidth=2)
ax1.fill_between(range(12), rev_2024, alpha=0.1, color="#2ecc71")
ax1.set_title("Monthly Revenue Trend")
ax1.set_ylabel("Revenue ($K)")
ax1.legend()

# 2. Bar chart: Quarterly comparison
ax2 = plt.subplot(2, 2, 2)
q_2023 = [sum(rev_2023[0:3]), sum(rev_2023[3:6]), sum(rev_2023[6:9]), sum(rev_2023[9:12])]
q_2024 = [sum(rev_2024[0:3]), sum(rev_2024[3:6]), sum(rev_2024[6:9]), sum(rev_2024[9:12])]
x = np.arange(4)
w = 0.35
ax2.bar(x - w/2, q_2023, w, label="2023", color="#3498db", alpha=0.7)
ax2.bar(x + w/2, q_2024, w, label="2024", color="#e74c3c", alpha=0.7)
ax2.set_xticks(x)
ax2.set_xticklabels(["Q1", "Q2", "Q3", "Q4"])
ax2.set_title("Quarterly Revenue")
ax2.legend()

# 3. Pie chart
ax3 = plt.subplot(2, 2, 3)
cats = ["Electronics", "Clothing", "Books", "Food", "Other"]
vals = [35, 25, 15, 20, 5]
colors = ["#3498db", "#2ecc71", "#e74c3c", "#f39c12", "#9b59b6"]
ax3.pie(vals, labels=cats, colors=colors, autopct="%1.0f%%", startangle=90)
ax3.set_title("Revenue by Category")

# 4. Histogram
ax4 = plt.subplot(2, 2, 4)
scores = np.random.normal(75, 12, 500)
ax4.hist(scores, bins=25, color="#9b59b6", edgecolor="black", alpha=0.7)
ax4.axvline(np.mean(scores), color="red", linestyle="--", linewidth=2,
            label=f"Mean={np.mean(scores):.1f}")
ax4.set_title("Customer Satisfaction")
ax4.legend()

plt.tight_layout(rect=[0, 0, 1, 0.96])
plt.savefig("dashboard.png", dpi=150, bbox_inches="tight")
plt.show()`,
        list: [
          "Use plt.style.use() once at the top for consistent styling",
          "fig.suptitle() sets an overall title for the dashboard",
          "Combine fill_between() with line plots for area emphasis",
          "Save with dpi=150 for good quality at reasonable file size",
        ],
      },
    ],
  },

  {
    id: "http-clients-tutorial",
    title: "HTTP Clients in Python: Requests, HTTPX & curl_cffi",
    category: "Python",
    icon: "Network",
    description: "A comprehensive guide to making HTTP requests in Python using three powerful libraries — Requests, HTTPX, and curl_cffi. Learn GET/POST requests, headers, authentication, sessions, async requests, and browser impersonation with practical examples.",
    level: "Intermediate",
    estimatedTime: "45 min read",
    sections: [
      {
        heading: "Introduction to HTTP Clients in Python",
        content: [
          "HTTP clients are the backbone of web scraping, API integration, and microservice communication. Python offers several excellent libraries, each with its own strengths.",
          "Requests is the most popular and beginner-friendly HTTP library. HTTPX adds async support and HTTP/2. curl_cffi specializes in browser impersonation, bypassing anti-bot protections.",
        ],
        list: [
          "Requests — most popular, simple API, synchronous only",
          "HTTPX — modern, supports both sync and async, HTTP/2 support",
          "curl_cffi — browser impersonation, bypasses TLS fingerprinting",
          "All three support GET, POST, headers, JSON, auth, sessions, and streaming",
        ],
      },
      {
        heading: "Installation and Setup",
        content: [
          "All three libraries are available on PyPI and install with pip.",
        ],
        code: `pip install requests httpx curl_cffi

# Verify
python -c "import requests; print('Requests:', requests.__version__)"
python -c "import httpx; print('HTTPX:', httpx.__version__)"
python -c "from curl_cffi import requests; print('curl_cffi OK')"`,
        table: {
          headers: ["Library", "Sync", "Async", "HTTP/2", "Browser Impersonation"],
          rows: [
            ["Requests", "Yes", "No", "No", "No"],
            ["HTTPX", "Yes", "Yes", "Yes", "No"],
            ["curl_cffi", "Yes", "Yes", "No", "Yes"],
          ],
        },
      },
      {
        heading: "Basic GET and POST Requests",
        content: [
          "Every HTTP client supports GET (retrieve data) and POST (submit data). The API is similar across all three libraries.",
        ],
        code: `# === REQUESTS ===
import requests

# GET request
response = requests.get("https://httpbin.org/get")
print(f"Status: {response.status_code}")
print(f"JSON: {response.json()}")

# GET with query parameters
response = requests.get("https://httpbin.org/get", params={"key": "value", "page": 1})

# POST with JSON body
response = requests.post("https://httpbin.org/post", json={"name": "Alice", "age": 30})

# POST with form data
response = requests.post("https://httpbin.org/post", data={"username": "admin"})


# === HTTPX ===
import httpx

response = httpx.get("https://httpbin.org/get")
response = httpx.get("https://httpbin.org/get", params={"key": "value"})
response = httpx.post("https://httpbin.org/post", json={"name": "Alice"})


# === curl_cffi (with browser impersonation!) ===
from curl_cffi import requests as cffi

response = cffi.get("https://httpbin.org/get", impersonate="chrome")
response = cffi.post("https://httpbin.org/post", json={"name": "Alice"}, impersonate="chrome")`,
        list: [
          "GET requests retrieve data — use params= for query parameters",
          "POST requests submit data — use json= for JSON, data= for form data",
          "response.json() parses JSON responses into Python dicts",
          "curl_cffi's impersonate='chrome' makes requests look like a real Chrome browser",
        ],
      },
      {
        heading: "Headers, Authentication, and Cookies",
        content: [
          "Real-world requests often require custom headers, authentication, and cookie handling.",
        ],
        code: `import requests

# Custom headers
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    "Accept": "application/json",
    "X-Custom-Header": "custom-value"
}
response = requests.get("https://httpbin.org/headers", headers=headers)

# Basic authentication
from requests.auth import HTTPBasicAuth
response = requests.get("https://httpbin.org/basic-auth/user/passwd",
                        auth=HTTPBasicAuth("user", "passwd"))
# Shorthand:
response = requests.get("https://httpbin.org/basic-auth/user/passwd",
                        auth=("user", "passwd"))

# Bearer token (API authentication)
api_token = "your_api_token"
headers = {"Authorization": f"Bearer {api_token}"}
response = requests.get("https://api.example.com/data", headers=headers)

# Cookies
response = requests.get("https://httpbin.org/cookies", cookies={"session_id": "abc123"})
response = requests.get("https://httpbin.org/cookies/set?name=value")
print(response.cookies.get_dict())  # {'name': 'value'}`,
        table: {
          headers: ["Auth Type", "Method", "Example", "Use Case"],
          rows: [
            ["Basic Auth", "auth=(user, pass)", "requests.get(url, auth=('user', 'pass'))", "Simple login"],
            ["Bearer Token", "Authorization header", "headers={'Authorization': 'Bearer token'}", "API tokens"],
            ["API Key", "Query parameter", "params={'api_key': 'key'}", "Public APIs"],
            ["Custom Header", "Header dict", "headers={'X-API-Key': 'key'}", "Service-specific"],
          ],
        },
      },
      {
        heading: "Session Management",
        content: [
          "Sessions persist cookies, headers, and authentication across multiple requests. They also reuse TCP connections for better performance.",
        ],
        code: `import requests

# Create a session
session = requests.Session()

# Set default headers for all requests
session.headers.update({"User-Agent": "MyApp/1.0", "Accept": "application/json"})
session.auth = ("user", "passwd")

# All requests include session headers and auth
response = session.get("https://httpbin.org/headers")
print(response.json()["headers"]["User-Agent"])  # "MyApp/1.0"

# Cookies persist across requests
session.get("https://httpbin.org/cookies/set?session=abc123")
response = session.get("https://httpbin.org/cookies")
print(response.json()["cookies"])  # {'session': 'abc123'}

# Context manager (auto-closes)
with requests.Session() as session:
    r1 = session.get("https://httpbin.org/get")
    r2 = session.get("https://httpbin.org/get")

# HTTPX session (called Client)
import httpx
with httpx.Client() as client:
    client.headers.update({"User-Agent": "MyApp/1.0"})
    r1 = client.get("https://httpbin.org/get")

# curl_cffi session
from curl_cffi import requests as cffi
session = cffi.Session(impersonate="chrome")
r1 = session.get("https://httpbin.org/get")`,
        list: [
          "Sessions persist cookies, headers, and auth automatically",
          "Sessions reuse TCP connections — faster for multiple requests to same host",
          "Always use context manager (with) to close sessions properly",
          "In HTTPX, sessions are called Client — same concept",
        ],
      },
      {
        heading: "Timeouts, Retries, and Error Handling",
        content: [
          "Network requests fail — servers go down, connections time out. Robust code handles these gracefully.",
        ],
        code: `import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
import time

# Simple timeout
try:
    response = requests.get("https://httpbin.org/delay/5", timeout=3)
except requests.Timeout:
    print("Request timed out!")

# Connect vs read timeout
try:
    response = requests.get("https://httpbin.org/delay/5", timeout=(3, 10))
except requests.Timeout as e:
    print(f"Timeout: {e}")

# Retry strategy with sessions
session = requests.Session()
retry_strategy = Retry(
    total=3, backoff_factor=1,
    status_forcelist=[429, 500, 502, 503, 504],
    allowed_methods=["GET", "POST"]
)
adapter = HTTPAdapter(max_retries=retry_strategy)
session.mount("http://", adapter)
session.mount("https://", adapter)

# Comprehensive error handling
def safe_request(url, max_retries=3):
    for attempt in range(max_retries):
        try:
            response = requests.get(url, timeout=10)
            response.raise_for_status()
            return response
        except requests.Timeout:
            print(f"Attempt {attempt+1}: Timeout")
        except requests.ConnectionError:
            print(f"Attempt {attempt+1}: Connection error")
        except requests.HTTPError as e:
            if e.response.status_code == 404:
                return None  # Don't retry 404s
            print(f"Attempt {attempt+1}: HTTP {e.response.status_code}")
        if attempt < max_retries - 1:
            time.sleep(2 ** attempt)  # Exponential backoff
    return None`,
        list: [
          "Always set a timeout — without it, a request can hang forever",
          "timeout=(connect, read) lets you set different timeouts",
          "Retry with backoff_factor=1 waits 1s, 2s, 4s between retries",
          "Only retry on transient errors (429, 500, 502, 503, 504) — not 404",
        ],
      },
      {
        heading: "Async Requests with HTTPX",
        content: [
          "Async requests let you make many concurrent HTTP calls without blocking — dramatically faster for scraping multiple pages or calling multiple APIs.",
        ],
        code: `import httpx
import asyncio
import time

# Single async request
async def fetch_one():
    async with httpx.AsyncClient() as client:
        response = await client.get("https://httpbin.org/get")
        return response.json()

result = asyncio.run(fetch_one())

# Concurrent requests (MUCH faster)
async def fetch_many(urls):
    async with httpx.AsyncClient(timeout=30) as client:
        tasks = [client.get(url) for url in urls]
        responses = await asyncio.gather(*tasks)
        return responses

urls = ["https://httpbin.org/delay/1"] * 5

start = time.time()
responses = asyncio.run(fetch_many(urls))
print(f"Fetched {len(responses)} in {time.time()-start:.2f}s")
# Sequential: ~5s, Concurrent: ~1s

# With concurrency limit
async def scrape_batch(urls, max_concurrent=10):
    semaphore = asyncio.Semaphore(max_concurrent)
    async def fetch_one(url):
        async with semaphore:
            async with httpx.AsyncClient() as client:
                return await client.get(url, timeout=15)
    tasks = [fetch_one(url) for url in urls]
    return await asyncio.gather(*tasks, return_exceptions=True)

results = asyncio.run(scrape_batch(
    [f"https://httpbin.org/anything/{i}" for i in range(20)], max_concurrent=5))`,
        list: [
          "async with httpx.AsyncClient() creates an async HTTP client",
          "asyncio.gather(*tasks) runs multiple requests concurrently",
          "Use asyncio.Semaphore to limit concurrent requests",
          "5 concurrent requests that each take 1s complete in ~1s, not 5s",
        ],
      },
      {
        heading: "Browser Impersonation with curl_cffi",
        content: [
          "Many modern websites use TLS fingerprinting to detect and block automated requests. curl_cffi solves this by impersonating real browsers — matching their TLS handshake and HTTP/2 settings.",
        ],
        code: `from curl_cffi import requests as cffi

# Basic browser impersonation
response = cffi.get("https://httpbin.org/get", impersonate="chrome")

# Available browser profiles
for browser in ["chrome", "safari", "edge", "firefox"]:
    try:
        response = cffi.get("https://httpbin.org/get", impersonate=browser)
        print(f"{browser}: {response.status_code}")
    except Exception as e:
        print(f"{browser}: Error - {e}")

# Session with persistent impersonation
session = cffi.Session(impersonate="chrome")
session.headers.update({"Accept-Language": "en-US,en;q=0.9"})
r1 = session.get("https://httpbin.org/get")
r2 = session.get("https://httpbin.org/headers")

# Scraping a Cloudflare-protected site
response = cffi.get("https://protected-site.example.com",
                    impersonate="chrome", timeout=15)
if response.status_code == 200:
    from bs4 import BeautifulSoup
    soup = BeautifulSoup(response.text, "lxml")
    print(soup.title.text)

# Async with curl_cffi
import asyncio
async def async_scrape():
    session = cffi.AsyncSession(impersonate="chrome")
    urls = ["https://httpbin.org/delay/1"] * 3
    tasks = [session.get(url) for url in urls]
    responses = await asyncio.gather(*tasks)
    await session.close()
    return responses

results = asyncio.run(async_scrape())`,
        table: {
          headers: ["Browser Profile", "Best For", "Notes"],
          rows: [
            ["chrome", "General scraping", "Most widely supported"],
            ["safari", "macOS-targeted sites", "Different fingerprint"],
            ["edge", "Microsoft sites", "Windows fingerprint"],
            ["firefox", "Privacy-focused sites", "Different TLS stack"],
          ],
        },
      },
      {
        heading: "Comparison and When to Use Each",
        content: [
          "Each HTTP client has its sweet spot. Here is a practical guide to choosing the right one.",
        ],
        code: `# Use REQUESTS when:
# - You need simplicity and readability
# - You are making synchronous requests
# - You are learning HTTP in Python
import requests
response = requests.get("https://api.github.com/users/github")

# Use HTTPX when:
# - You need async/concurrent requests
# - You want HTTP/2 support
# - You are building high-performance scrapers
import httpx
async with httpx.AsyncClient() as client:
    response = await client.get("https://api.github.com/users/github")

# Use curl_cffi when:
# - Regular requests are blocked by Cloudflare
# - You need TLS fingerprint matching
# - You are scraping protected sites
from curl_cffi import requests as cffi
response = cffi.get("https://protected-site.com", impersonate="chrome")`,
        table: {
          headers: ["Feature", "Requests", "HTTPX", "curl_cffi"],
          rows: [
            ["Simplicity", "Best", "Good", "Good"],
            ["Async support", "No", "Yes (native)", "Yes"],
            ["HTTP/2", "No", "Yes", "No"],
            ["Browser impersonation", "No", "No", "Yes"],
            ["Bypass Cloudflare", "No", "No", "Yes"],
            ["Best for beginners", "Yes", "Intermediate", "Advanced"],
          ],
        },
      },
    ],
  },

  {
    id: "lxml-tutorial",
    title: "HTML Parsers with lxml: Extracting Data Using XPath",
    category: "Web Scraping",
    icon: "Code2",
    description: "A comprehensive guide to parsing HTML and XML with Python's lxml library. Learn XPath syntax, ElementTree API, finding elements, extracting data, handling namespaces, and performance comparison with BeautifulSoup with practical examples.",
    level: "Intermediate",
    estimatedTime: "40 min read",
    sections: [
      {
        heading: "Introduction to lxml",
        content: [
          "lxml is a high-performance Python library for processing XML and HTML. It combines the speed of C-based libxml2 with the simplicity of Python's ElementTree API. For web scraping, lxml is significantly faster than BeautifulSoup and adds powerful XPath support.",
          "lxml serves as both a standalone parser and as the backend parser for BeautifulSoup. Understanding lxml directly gives you access to XPath, which is far more expressive than CSS selectors for complex queries.",
        ],
        list: [
          "lxml is the fastest HTML/XML parser for Python — C-backed for performance",
          "Supports XPath 1.0 — far more powerful than CSS selectors",
          "Works as a standalone parser or as the backend for BeautifulSoup",
          "Handles malformed HTML gracefully (recovers from broken tags)",
        ],
      },
      {
        heading: "Installation and Setup",
        content: [
          "lxml is available on PyPI with pre-built wheels for all major platforms.",
        ],
        code: `pip install lxml requests

# Standard imports for web scraping
from lxml import html, etree
import requests

# Basic usage
response = requests.get("https://quotes.toscrape.com/")
tree = html.fromstring(response.content)
print(tree.xpath("//title/text()")[0])`,
        table: {
          headers: ["Module", "Import", "Best For"],
          rows: [
            ["lxml.html", "from lxml import html", "HTML parsing / web scraping"],
            ["lxml.etree", "from lxml import etree", "XML parsing / RSS feeds"],
            ["lxml + BS4", "BeautifulSoup(html, 'lxml')", "Combining XPath + BS4 API"],
          ],
        },
      },
      {
        heading: "XPath Basics: Finding Elements",
        content: [
          "XPath (XML Path Language) is a query language for selecting nodes from XML/HTML documents. It is more expressive than CSS selectors — supporting conditions, axes, and text matching.",
        ],
        code: `from lxml import html
import requests

response = requests.get("https://quotes.toscrape.com/")
tree = html.fromstring(response.content)

# Select by tag name
titles = tree.xpath("//title/text()")

# Select by class
quotes = tree.xpath('//span[@class="text"]/text()')
print(f"Found {len(quotes)} quotes")

# Select by id
content = tree.xpath('//*[@id="content"]')

# Predicates (conditions)
first_quote = tree.xpath('//div[@class="quote"][1]')
last_quote = tree.xpath('//div[@class="quote"][last()]')

# Text contains
tags_with_love = tree.xpath('//a[contains(text(), "love")]/text()')

# Authors
authors = tree.xpath('//small[@class="author"]/text()')

# Tag links
tags = tree.xpath('//a[@class="tag"]/text()')`,
        table: {
          headers: ["XPath Expression", "Meaning", "CSS Equivalent"],
          rows: [
            ["//tag", "All elements with this tag", "tag"],
            ["//tag[@class='x']", "Elements with class x", "tag.x"],
            ["//tag[@id='y']", "Element with id y", "tag#y"],
            ["//tag[1]", "First matching element", "tag:first-child"],
            ["//tag[last()]", "Last matching element", "tag:last-child"],
            ["//tag/text()", "Text content of elements", "N/A"],
            ["contains(@class, 'x')", "Class contains x", "tag*[class*=x]"],
            ["contains(text(), 'word')", "Text contains word", "N/A"],
          ],
        },
      },
      {
        heading: "XPath Axes: Navigating the Tree",
        content: [
          "XPath axes let you navigate relative to the current node — parents, children, siblings, ancestors, descendants. This is where XPath truly outshines CSS selectors.",
        ],
        code: `from lxml import html

sample = """
<div id="container">
  <h1>Title</h1>
  <p class="intro">Introduction</p>
  <ul id="nav">
    <li><a href="/home">Home</a></li>
    <li><a href="/contact" class="active">Contact</a></li>
  </ul>
</div>
"""
tree = html.fromstring(sample)

# Parent axis
parent = tree.xpath('//a[@class="active"]/parent::*')
print(parent[0].tag)  # "li"

# Shorthand: .. for parent
grandparent = tree.xpath('//a[@class="active"]/../..')
print(grandparent[0].get("id"))  # "container"

# Ancestor axis
ancestors = tree.xpath('//a[@class="active"]/ancestor::*')
for a in ancestors:
    print(f"  Ancestor: {a.tag}")

# Following-sibling
h1_siblings = tree.xpath('//h1/following-sibling::*')
for sib in h1_siblings:
    print(f"  After h1: {sib.tag}")

# Preceding-sibling
before_ul = tree.xpath('//ul/preceding-sibling::*')
for sib in before_ul:
    print(f"  Before ul: {sib.tag}")

# Descendant
nav_links = tree.xpath('//ul[@id="nav"]//a')
for link in nav_links:
    print(f"  Link: {link.text}, href={link.get('href')}")

# Attribute extraction
all_hrefs = tree.xpath('//a/@href')
print(f"All hrefs: {all_hrefs}")`,
        list: [
          "parent::* or .. — go up one level",
          "ancestor::* — all elements above (recursive)",
          "following-sibling::* — siblings after current element",
          "preceding-sibling::* — siblings before current element",
          "// or descendant::* — all elements below (recursive)",
          "/@attr — extract attribute value directly",
        ],
      },
      {
        heading: "Extracting Data: Text and Attributes",
        content: [
          "XPath makes data extraction concise — get text content and attribute values directly in the expression.",
        ],
        code: `from lxml import html
import requests

response = requests.get("https://quotes.toscrape.com/")
tree = html.fromstring(response.content)

# Extract text
quotes = tree.xpath('//span[@class="text"]/text()')
for q in quotes[:3]:
    print(f"Quote: {q.strip()[:60]}...")

# Extract attributes
hrefs = tree.xpath('//a/@href')
print(f"Found {len(hrefs)} links")

# Extract multiple values from repeated elements
quote_data = []
for div in tree.xpath('//div[@class="quote"]'):
    text = div.xpath('.//span[@class="text"]/text()')[0]
    author = div.xpath('.//small[@class="author"]/text()')[0]
    tags = div.xpath('.//a[@class="tag"]/text()')
    quote_data.append({"text": text.strip(), "author": author.strip(), "tags": tags})

# normalize-space() cleans whitespace
clean = tree.xpath('//span[@class="text"]/normalize-space()')

# Combining XPath with Python
pairs = []
for div in tree.xpath('//div[@class="quote"]'):
    quote = div.xpath('.//span[@class="text"]/text()')[0].strip()
    author = div.xpath('.//small[@class="author"]/text()')[0].strip()
    pairs.append((author, quote))`,
        list: [
          "text() extracts text content — returns a list of strings",
          "@attr extracts attribute values directly",
          "normalize-space() strips and collapses whitespace",
          "Use . (dot) prefix for relative XPath within an already-selected element",
        ],
      },
      {
        heading: "Real-World Example and Performance",
        content: [
          "Let's scrape a realistic page and compare lxml's performance with BeautifulSoup.",
        ],
        code: `from lxml import html
from bs4 import BeautifulSoup
import requests
import json
import time

# Real scraping example
def scrape_with_xpath(url):
    response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
    tree = html.fromstring(response.content)
    
    articles = []
    for node in tree.xpath('//div[@class="quote"]'):
        text = node.xpath('.//span[@class="text"]/text()')
        author = node.xpath('.//small[@class="author"]/text()')
        tags = node.xpath('.//a[@class="tag"]/text()')
        if text and author:
            articles.append({
                "text": text[0].strip(),
                "author": author[0].strip(),
                "tags": tags,
            })
    return articles

data = scrape_with_xpath("https://quotes.toscrape.com/")
print(f"Scraped {len(data)} items")

# Performance comparison
response = requests.get("https://quotes.toscrape.com/")
content = response.content
iterations = 100

# lxml
start = time.time()
for _ in range(iterations):
    tree = html.fromstring(content)
lxml_time = (time.time() - start) / iterations

# BeautifulSoup with lxml
start = time.time()
for _ in range(iterations):
    soup = BeautifulSoup(content, "lxml")
bs4_time = (time.time() - start) / iterations

print(f"lxml: {lxml_time*1000:.2f} ms")
print(f"BS4+lxml: {bs4_time*1000:.2f} ms")
print(f"lxml is {bs4_time/lxml_time:.1f}x faster")`,
        table: {
          headers: ["Metric", "lxml direct", "BeautifulSoup + lxml"],
          rows: [
            ["Parsing speed", "Fastest", "~2x slower"],
            ["Element selection", "Fastest (XPath)", "~2x slower"],
            ["Memory usage", "Low", "Medium"],
            ["API simplicity", "XPath (steeper)", "Pythonic (easier)"],
            ["Best for", "Large-scale scraping", "Quick scripts"],
          ],
        },
      },
    ],
  },

  {
    id: "browser-automation-tutorial",
    title: "Browser Automation: Scraping JavaScript & Dynamic Sites",
    category: "Web Scraping",
    icon: "MonitorCog",
    description: "A complete guide to scraping JavaScript-rendered and dynamic websites using Selenium and Playwright. Learn to launch browsers, navigate pages, find and interact with elements, wait for dynamic content, handle JavaScript-rendered pages, and run headless browsers with practical examples.",
    level: "Advanced",
    estimatedTime: "55 min read",
    sections: [
      {
        heading: "Introduction to Browser Automation",
        content: [
          "Many modern websites load content dynamically via JavaScript — the initial HTML is just a skeleton, and the actual content is rendered after the page loads. Traditional scrapers (Requests + BeautifulSoup) cannot see this content.",
          "Browser automation tools solve this by running a real browser that executes JavaScript, renders the page, and lets you interact with it — clicking buttons, filling forms, scrolling, and waiting for content to appear.",
          "Selenium is the oldest and most widely used tool. Playwright is a newer alternative from Microsoft that is faster, more reliable, and has better async support.",
        ],
        list: [
          "Selenium — mature, widely used, large community, supports all major browsers",
          "Playwright — modern, faster, better auto-waiting, built-in screenshots/video",
          "Both render JavaScript and interact with pages like a real user",
          "Use when content loads via AJAX/JS or requires clicking/scrolling to reveal",
          "Slower than Requests-based scraping — use only when necessary",
        ],
      },
      {
        heading: "Installing Selenium",
        content: [
          "Selenium 4+ includes its own WebDriver manager — you no longer need to manually download ChromeDriver.",
        ],
        code: `pip install selenium

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument("--headless")
options.add_argument("--no-sandbox")
options.add_argument("--window-size=1920,1080")

driver = webdriver.Chrome(options=options)
driver.get("https://quotes.toscrape.com/js/")

import time
time.sleep(3)

quotes = driver.find_elements(By.CSS_SELECTOR, ".quote .text")
print(f"Found {len(quotes)} quotes")
for q in quotes[:3]:
    print(f"  {q.text[:60]}...")

driver.quit()`,
        table: {
          headers: ["Locator", "Syntax", "Example"],
          rows: [
            ["By.ID", "By.ID, 'id'", "By.ID, 'login-btn'"],
            ["By.CLASS_NAME", "By.CLASS_NAME, 'class'", "By.CLASS_NAME, 'quote'"],
            ["By.CSS_SELECTOR", "By.CSS_SELECTOR, 'selector'", "By.CSS_SELECTOR, 'div.quote > span'"],
            ["By.XPATH", "By.XPATH, '//tag[@attr]'", "By.XPATH, '//span[@class=\"text\"]'"],
            ["By.TAG_NAME", "By.TAG_NAME, 'tag'", "By.TAG_NAME, 'a'"],
          ],
        },
      },
      {
        heading: "Installing Playwright",
        content: [
          "Playwright requires a two-step installation: the Python package and the browser binaries.",
        ],
        code: `pip install playwright
playwright install chromium

from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    
    page.goto("https://quotes.toscrape.com/js/")
    page.wait_for_selector(".quote")
    
    quotes = page.query_selector_all(".quote .text")
    print(f"Found {len(quotes)} quotes")
    for q in quotes[:3]:
        print(f"  {q.inner_text()[:60]}...")
    
    browser.close()`,
        table: {
          headers: ["Feature", "Selenium", "Playwright"],
          rows: [
            ["Browser setup", "Auto-managed (Selenium 4+)", "Bundled browsers"],
            ["Auto-waiting", "Manual (WebDriverWait)", "Built-in"],
            ["Speed", "Good", "Faster"],
            ["Async support", "Limited", "Native async/await"],
            ["Screenshots", "Yes", "Yes (easier API)"],
            ["Video recording", "No", "Yes (built-in)"],
          ],
        },
      },
      {
        heading: "Waiting for Dynamic Content",
        content: [
          "The biggest challenge with dynamic sites is knowing when content has loaded. Both tools provide wait mechanisms — explicit waits that pause until a specific element appears.",
        ],
        code: `# === SELENIUM: Waiting ===
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument("--headless")
driver = webdriver.Chrome(options=options)
driver.get("https://quotes.toscrape.com/js/")

try:
    quote = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, ".quote .text"))
    )
    all_quotes = WebDriverWait(driver, 10).until(
        EC.presence_of_all_elements_located((By.CSS_SELECTOR, ".quote .text"))
    )
    print(f"Found {len(all_quotes)} quotes")
except:
    print("Timed out")

driver.quit()

# === PLAYWRIGHT: Waiting (auto-waits by default!) ===
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("https://quotes.toscrape.com/js/")
    
    # Playwright auto-waits
    quote = page.query_selector(".quote .text")
    print(f"First quote: {quote.inner_text()[:60]}...")
    
    # Explicit wait
    page.wait_for_selector(".quote .text", state="visible", timeout=10000)
    
    # Wait for network idle
    page.goto("https://quotes.toscrape.com/js/", wait_until="networkidle")
    
    # Wait for custom condition
    page.wait_for_function('document.querySelectorAll(".quote").length >= 10')
    
    browser.close()`,
        list: [
          "WebDriverWait(driver, timeout) + EC.presence_of_element_located — Selenium explicit wait",
          "Playwright auto-waits by default — query_selector waits up to 30s automatically",
          "page.wait_for_selector() — explicit wait for a selector",
          "wait_until='networkidle' — wait until all network requests complete (Playwright)",
        ],
      },
      {
        heading: "Interacting with Pages",
        content: [
          "Browser automation is about interacting with pages — clicking buttons, filling forms, selecting dropdowns, and scrolling.",
        ],
        code: `# === SELENIUM ===
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()
driver.get("https://quotes.toscrape.com/login")

# Fill form
driver.find_element(By.ID, "username").send_keys("admin")
driver.find_element(By.ID, "password").send_keys("admin")

# Click button
driver.find_element(By.CSS_SELECTOR, 'input[type="submit"]').click()

# Scroll down
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

# Screenshot
driver.save_screenshot("screenshot.png")

# Select dropdown
from selenium.webdriver.support.ui import Select
select = Select(driver.find_element(By.TAG_NAME, "select"))
select.select_by_visible_text("Albert Einstein")

driver.quit()

# === PLAYWRIGHT ===
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()
    page.goto("https://quotes.toscrape.com/login")
    
    # Fill form
    page.fill("input#username", "admin")
    page.fill("input#password", "admin")
    
    # Click
    page.click('input[type="submit"]')
    page.wait_for_selector("text=Logout")
    
    # Scroll
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    
    # Screenshot (full page)
    page.screenshot(path="screenshot.png", full_page=True)
    
    # Select dropdown
    page.select_option("select", label="Albert Einstein")
    
    browser.close()`,
        table: {
          headers: ["Action", "Selenium", "Playwright"],
          rows: [
            ["Type text", "element.send_keys('text')", "page.fill(selector, 'text')"],
            ["Click", "element.click()", "page.click(selector)"],
            ["Scroll", "execute_script(js)", "page.evaluate(js)"],
            ["Screenshot", "save_screenshot(path)", "screenshot(path=, full_page=)"],
            ["Select dropdown", "Select(element).select_by_", "page.select_option(selector, label=)"],
            ["Get text", "element.text", "element.inner_text()"],
          ],
        },
      },
      {
        heading: "Scraping Infinite Scroll",
        content: [
          "Many modern sites use infinite scroll — content loads as you scroll down. Scraping these requires simulating scroll events and collecting data incrementally.",
        ],
        code: `# === SELENIUM: Infinite scroll ===
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import time

options = Options()
options.add_argument("--headless")
driver = webdriver.Chrome(options=options)
driver.get("https://quotes.toscrape.com/scroll")

all_quotes = []
last_count = 0
attempts = 0

while attempts < 5:
    quotes = driver.find_elements(By.CSS_SELECTOR, ".quote .text")
    for q in quotes:
        if q.text not in all_quotes:
            all_quotes.append(q.text)
    
    current = len(all_quotes)
    if current == last_count:
        attempts += 1
    else:
        attempts = 0
        last_count = current
    
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(2)

print(f"Total: {len(all_quotes)} quotes")
driver.quit()

# === PLAYWRIGHT: Infinite scroll ===
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("https://quotes.toscrape.com/scroll")
    
    all_quotes = []
    for i in range(10):
        quotes = page.query_selector_all(".quote .text")
        for q in quotes:
            text = q.inner_text()
            if text not in all_quotes:
                all_quotes.append(text)
        
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        page.wait_for_timeout(2000)
    
    print(f"Total: {len(all_quotes)} quotes")
    browser.close()`,
        list: [
          "Scroll with execute_script in Selenium, page.evaluate in Playwright",
          "Track unique items to detect when no new content is loading",
          "Add a delay after scrolling to give AJAX time to load",
          "Set a max scroll limit to avoid infinite loops",
        ],
      },
      {
        heading: "Production Best Practices",
        content: [
          "For production scraping, use proper browser settings, realistic user agents, and polite delays.",
        ],
        code: `from playwright.sync_api import sync_playwright
import json, time

def scrape_dynamic_site(url, max_pages=5):
    with sync_playwright() as p:
        browser = p.chromium.launch(
            headless=True,
            args=["--no-sandbox", "--disable-blink-features=AutomationControlled"]
        )
        context = browser.new_context(
            viewport={"width": 1920, "height": 1080},
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                       "AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
        )
        page = context.new_page()
        all_data = []
        
        for page_num in range(1, max_pages + 1):
            if page_num == 1:
                page.goto(url, wait_until="networkidle", timeout=30000)
            else:
                next_btn = page.query_selector("li.next > a")
                if not next_btn:
                    break
                next_btn.click()
                page.wait_for_selector(".quote")
            
            for q in page.query_selector_all(".quote"):
                all_data.append({
                    "text": q.query_selector(".text").inner_text(),
                    "author": q.query_selector(".author").inner_text(),
                    "tags": [t.inner_text() for t in q.query_selector_all(".tag")],
                })
            time.sleep(1)
        
        browser.close()
        return all_data

results = scrape_dynamic_site("https://quotes.toscrape.com/js/", max_pages=3)
print(f"Scraped {len(results)} quotes")`,
        list: [
          "Use --no-sandbox for Docker/CI environments",
          "Set a realistic User-Agent and viewport to avoid detection",
          "Use wait_until='networkidle' to wait for all AJAX",
          "Add delays between page navigations to be polite",
          "Save results incrementally to avoid data loss on crashes",
        ],
      },
    ],
  },

  {
    id: "scrapy-tutorial",
    title: "Scrapy Tutorial: Professional Web Scraping Framework",
    category: "Web Scraping",
    icon: "Globe",
    description: "A complete guide to web scraping with Scrapy — Python's most powerful scraping framework. Learn to create projects, write spiders, use CSS and XPath selectors, define items, build pipelines, handle pagination, follow links, and export data with practical examples.",
    level: "Advanced",
    estimatedTime: "60 min read",
    sections: [
      {
        heading: "Introduction to Scrapy",
        content: [
          "Scrapy is a fast, high-level web scraping and web crawling framework for Python. It is designed for large-scale scraping projects — handling thousands of pages efficiently with built-in concurrency, retries, throttling, data pipelines, and export formats.",
          "Unlike BeautifulSoup (a library) or Selenium (a browser tool), Scrapy is a complete framework with a project structure, spider classes, item containers, and processing pipelines.",
        ],
        list: [
          "Scrapy is a framework with project structure and conventions",
          "Built-in concurrency — can crawl hundreds of pages simultaneously",
          "Automatic retries, throttling, and rate limiting",
          "Export to CSV, JSON, XML, or custom formats via pipelines",
          "Spider classes organize scraping logic for different sites",
        ],
      },
      {
        heading: "Installation and Project Setup",
        content: [
          "After installing Scrapy, you create a project with a dedicated command that sets up the directory structure.",
        ],
        code: `pip install scrapy
scrapy version

# Create a new project
# scrapy startproject myscraper

# This creates:
# myscraper/
#   scrapy.cfg
#   myscraper/
#     items.py        # Data containers
#     pipelines.py    # Data processing
#     settings.py     # Project settings
#     spiders/        # Your spider classes

# Create a spider
# cd myscraper
# scrapy genspider quotes quotes.toscrape.com`,
        table: {
          headers: ["File", "Purpose", "When to Modify"],
          rows: [
            ["scrapy.cfg", "Deployment config", "Rarely"],
            ["items.py", "Define data fields", "When you need structured data"],
            ["spiders/", "Spider classes", "Always — scraping logic lives here"],
            ["pipelines.py", "Data processing", "For cleaning/validating/storing data"],
            ["settings.py", "Configuration", "For throttling, retries, user agents"],
          ],
        },
      },
      {
        heading: "Writing Your First Spider",
        content: [
          "A spider is a Python class that defines how to scrape a site — which URLs to start from, how to parse each page, and what data to extract.",
        ],
        code: `# myscraper/spiders/quotes_spider.py
import scrapy

class QuotesSpider(scrapy.Spider):
    name = "quotes"
    allowed_domains = ["quotes.toscrape.com"]
    start_urls = ["https://quotes.toscrape.com/"]
    
    def parse(self, response):
        for quote in response.css("div.quote"):
            yield {
                "text": quote.css("span.text::text").get(),
                "author": quote.css("small.author::text").get(),
                "tags": quote.css("a.tag::text").getall(),
            }
        
        # Follow pagination
        next_page = response.css("li.next a::attr(href)").get()
        if next_page:
            yield response.follow(next_page, callback=self.parse)

# Run: scrapy crawl quotes -o quotes.json
#
# CSS selectors in Scrapy:
# .css("div.quote")         - Select divs with class "quote"
# .css("span.text::text")   - Get text content of span
# .css("a.tag::text")       - Get text of all tag links
# .css("a::attr(href)")     - Get href attribute
# .get()                    - Return first match (or None)
# .getall()                 - Return all matches as a list`,
        list: [
          "name must be unique across all spiders in the project",
          "start_urls is a list of URLs where the spider begins",
          "parse() is the default callback for start_urls responses",
          "yield dict returns scraped data — Scrapy collects and exports it",
          "response.follow(url, callback) follows links to new pages",
          "Run with: scrapy crawl spidername -o output.json",
        ],
      },
      {
        heading: "CSS and XPath Selectors in Scrapy",
        content: [
          "Scrapy has its own selector system supporting both CSS and XPath, built on lxml for speed.",
        ],
        code: `import scrapy

class SelectorSpider(scrapy.Spider):
    name = "selectors"
    start_urls = ["https://quotes.toscrape.com/"]
    
    def parse(self, response):
        # CSS selectors
        title = response.css("title::text").get()
        quote_texts = response.css("span.text::text").getall()
        first_author = response.css("small.author::text").get()
        all_links = response.css("a::attr(href)").getall()
        
        # XPath selectors (more powerful)
        title_xpath = response.xpath("//title/text()").get()
        quotes_xpath = response.xpath('//span[@class="text"]/text()').getall()
        
        # XPath for complex queries
        einstein_quotes = response.xpath(
            '//div[@class="quote"]'
            '[.//small[text()="Albert Einstein"]]'
            '//span[@class="text"]/text()'
        ).getall()
        
        love_tags = response.xpath(
            '//a[@class="tag" and contains(text(), "love")]/text()'
        ).getall()
        
        # Combining CSS and XPath
        for quote in response.css("div.quote"):
            text = quote.xpath('.//span[@class="text"]/text()').get()
            author = quote.xpath('.//small[@class="author"]/text()').get()
            yield {"text": text, "author": author}`,
        table: {
          headers: ["Selector", "Method", "Returns", "Example"],
          rows: [
            ["CSS", "response.css('tag::text')", "SelectorList", ".css('span.text::text').get()"],
            ["XPath", "response.xpath('//tag/text()')", "SelectorList", ".xpath('//span/text()').get()"],
            ["Get first", ".get()", "str or None", ".css('h1::text').get()"],
            ["Get all", ".getall()", "list of str", ".css('a::text').getall()"],
            ["Attribute", "::attr(name)", "str values", ".css('a::attr(href)').get()"],
            ["Relative", ". (dot prefix)", "Relative to element", ".xpath('.//p/text()').get()"],
          ],
        },
      },
      {
        heading: "Items: Structured Data Containers",
        content: [
          "Items define the structure of your scraped data — similar to a database schema. Using items gives you validation and integration with pipelines.",
        ],
        code: `# myscraper/items.py
import scrapy

class QuoteItem(scrapy.Item):
    text = scrapy.Field()
    author = scrapy.Field()
    tags = scrapy.Field()
    url = scrapy.Field()
    scraped_at = scrapy.Field()

# myscraper/spiders/quotes_with_items.py
import scrapy
from datetime import datetime
from myscraper.items import QuoteItem

class QuotesWithItemsSpider(scrapy.Spider):
    name = "quotes_items"
    start_urls = ["https://quotes.toscrape.com/"]
    
    def parse(self, response):
        for quote_div in response.css("div.quote"):
            item = QuoteItem()
            item["text"] = quote_div.css("span.text::text").get()
            item["author"] = quote_div.css("small.author::text").get()
            item["tags"] = quote_div.css("a.tag::text").getall()
            item["url"] = response.url
            item["scraped_at"] = datetime.now().isoformat()
            yield item
        
        next_page = response.css("li.next a::attr(href)").get()
        if next_page:
            yield response.follow(next_page, callback=self.parse)`,
        list: [
          "Items are like typed dicts — define fields with scrapy.Field()",
          "Using items ensures consistent field names across spiders",
          "Items integrate with pipelines for processing",
          "One spider can yield multiple item types",
        ],
      },
      {
        heading: "Pipelines: Processing Scraped Data",
        content: [
          "Pipelines process items after scraping — cleaning data, removing duplicates, validating fields, or storing in databases.",
        ],
        code: `# myscraper/pipelines.py
import json
from itemadapter import ItemAdapter
from scrapy.exceptions import DropItem

class DuplicateFilterPipeline:
    def __init__(self):
        self.seen = set()
    
    def process_item(self, item, spider):
        adapter = ItemAdapter(item)
        text = adapter.get("text")
        if text in self.seen:
            raise DropItem(f"Duplicate: {text[:40]}...")
        self.seen.add(text)
        return item

class DataCleaningPipeline:
    def process_item(self, item, spider):
        adapter = ItemAdapter(item)
        if adapter.get("text"):
            adapter["text"] = adapter["text"].strip()
        if adapter.get("author"):
            adapter["author"] = adapter["author"].strip()
        if adapter.get("tags"):
            adapter["tags"] = [t.strip() for t in adapter["tags"] if t.strip()]
        return item

class ValidationPipeline:
    required_fields = ["text", "author"]
    def process_item(self, item, spider):
        adapter = ItemAdapter(item)
        for field in self.required_fields:
            if not adapter.get(field):
                raise DropItem(f"Missing: {field}")
        return item

# Enable in settings.py:
# ITEM_PIPELINES = {
#     "myscraper.pipelines.DuplicateFilterPipeline": 100,
#     "myscraper.pipelines.DataCleaningPipeline": 200,
#     "myscraper.pipelines.ValidationPipeline": 300,
# }`,
        table: {
          headers: ["Pipeline Method", "When Called", "Purpose"],
          rows: [
            ["open_spider(spider)", "Once when spider starts", "Open files, connect to DB"],
            ["close_spider(spider)", "Once when spider ends", "Close files, clean up"],
            ["process_item(item, spider)", "For every scraped item", "Clean, validate, filter"],
          ],
        },
      },
      {
        heading: "Following Links and Pagination",
        content: [
          "Scrapy excels at crawling — following links across pages automatically. The response.follow() method creates new requests with callbacks.",
        ],
        code: `import scrapy

class DeepCrawlSpider(scrapy.Spider):
    name = "deep_crawl"
    start_urls = ["https://quotes.toscrape.com/"]
    
    def parse(self, response):
        # Level 1: List page
        for quote in response.css("div.quote"):
            text = quote.css("span.text::text").get()
            author = quote.css("small.author::text").get()
            
            # Follow to author detail page, passing data via meta
            author_link = quote.css("span a::attr(href)").get()
            if author_link:
                yield response.follow(
                    author_link, callback=self.parse_author,
                    meta={"quote_text": text, "quote_author": author}
                )
        
        # Follow pagination
        next_page = response.css("li.next a::attr(href)").get()
        if next_page:
            yield response.follow(next_page, callback=self.parse)
    
    def parse_author(self, response):
        # Level 2: Author detail page
        yield {
            "quote_text": response.meta.get("quote_text"),
            "author": response.meta.get("quote_author"),
            "birth_date": response.css("span.author-born-date::text").get(),
            "birth_location": response.css("span.author-born-location::text").get(),
            "description": response.css("div.author-description::text").get().strip(),
        }`,
        list: [
          "response.follow(url, callback) creates a new request and follows the link",
          "Use meta={...} to pass data between parse callbacks",
          "Multi-level crawling: list page -> detail page -> sub-detail",
          "Scrapy automatically deduplicates URLs by default",
        ],
      },
      {
        heading: "Settings and Exporting Data",
        content: [
          "Scrapy's settings.py controls everything from download delays to pipelines. Data can be exported to JSON, CSV, XML, and more.",
        ],
        code: `# myscraper/settings.py — key settings

# Politeness
DOWNLOAD_DELAY = 1.0
CONCURRENT_REQUESTS_PER_DOMAIN = 8

# Retry
RETRY_TIMES = 3
RETRY_HTTP_CODES = [429, 500, 502, 503, 504]

# User agent
USER_AGENT = "MyScraper/1.0 (contact: admin@example.com)"

# Auto-throttle (smart rate limiting)
AUTOTHROTTLE_ENABLED = True
AUTOTHROTTLE_START_DELAY = 1.0
AUTOTHROTTLE_MAX_DELAY = 60.0

# Respect robots.txt
ROBOTSTXT_OBEY = True

# Pipelines (numbers define order)
ITEM_PIPELINES = {
    "myscraper.pipelines.DuplicateFilterPipeline": 100,
    "myscraper.pipelines.DataCleaningPipeline": 200,
}

# --- Exporting data ---
# scrapy crawl quotes -o quotes.json    # JSON
# scrapy crawl quotes -o quotes.csv     # CSV
# scrapy crawl quotes -o quotes.xml     # XML
# scrapy crawl quotes -o quotes.jl      # JSON Lines (better for large datasets)

# --- Run with custom settings ---
# scrapy crawl quotes -o quotes.json -s DOWNLOAD_DELAY=2

# --- Run with arguments ---
# scrapy crawl quotes -a category=inspirational -o filtered.json

# Spider accepting arguments:
class ArgumentSpider(scrapy.Spider):
    name = "args_spider"
    def __init__(self, category=None, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.category = category
        self.start_urls = [f"https://quotes.toscrape.com/tag/{category}/"] if category \\
            else ["https://quotes.toscrape.com/"]
    
    def parse(self, response):
        for quote in response.css("div.quote"):
            yield {"text": quote.css("span.text::text").get(),
                   "author": quote.css("small.author::text").get()}`,
        table: {
          headers: ["Setting", "Default", "Recommended", "Purpose"],
          rows: [
            ["DOWNLOAD_DELAY", "0", "1.0-3.0", "Seconds between requests"],
            ["CONCURRENT_REQUESTS_PER_DOMAIN", "16", "4-8", "Max simultaneous requests"],
            ["RETRY_TIMES", "2", "3", "Retries on failure"],
            ["AUTOTHROTTLE_ENABLED", "False", "True", "Adaptive rate limiting"],
            ["ROBOTSTXT_OBEY", "True", "True", "Respect robots.txt"],
          ],
        },
      },
    ],
  },
];
