/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  docSidebar: [
    {
      type: "category",
      label: "Overview",
      //collapsed: false,
      link: {
        type: "doc",
        id: "index",
      },
      items: ["why-timeplus", "showcases"],
    },
    {
      type: "category",
      label: "Quickstart",
      //collapsed: false,
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "category",
          label: "Timieplus Cloud Quickstart",
          //collapsed: false,
          link: {
            type: "doc",
            id: "quickstart",
          },
          items: ["quickstart-confluent", "quickstart-ingest-api"],
        },
        "proton-howto",
      ],
    },
    {
      type: "category",
      label: "Key Concepts",
      //collapsed: false,
      link: {
        type: "doc",
        id: "glossary",
      },
      items: [
        {
          type: "category",
          label: "Stream",
          //collapsed: false,
          link: {
            type: "doc",
            id: "working-with-streams",
          },
          items: [
            "changelog-stream",
            "versioned-stream",
            "external-stream",
            "substream",
          ],
        },
        "eventtime",
        "stream-query",
        "history",
        "view",
        "source",
        "destination",
        "alert",
      ],
    },
    "install",
    {
      type: "category",
      label: "Timeplus Core (Proton)",
      link: {
        type: "doc",
        id: "proton",
      },
      items: [
        "proton-architecture",
        "proton-create-stream",
        "proton-kafka",
        "proton-schema-registry",
        "proton-format-schema",
        {
          type: "category",
          label: "Manage Stream",
          //collapsed: false,
          link: {
            type: "generated-index",
          },
          items: ["proton-alter-stream", "proton-drop-stream"],
        },
        "proton-create-view",
        "proton-clickhouse-external-table",
        "proton-create-udf",
        "proton-ingest-api",
        "proton-ports",
      ],
    },
    {
      type: "category",
      label: "Timeplus Cloud",
      //collapsed: false,
      link: {
        type: "doc",
        id: "timeplus-cloud",
      },
      items: [
        {
          type: "category",
          label: "Data Ingestion",
          //collapsed: false,
          link: {
            type: "doc",
            id: "ingestion",
          },
          items: [
            "kafka-source",
            "confluent-cloud-source",
            "kafka-connect",
            "pulsar-source",
            "ingest-api",
            "automq-kafka-source",
            "datapm",
          ],
        },
        "timeplus-query-guide",
        "query-api",
        "viz",
        {
          type: "category",
          label: "Manage",
          link: {
            type: "generated-index",
          },
          items: ["apikey", "terraform"],
        },
        "issues",
        {
          label: "REST API Reference",
          type: "link",
          href: "https://docs.timeplus.com/rest.html",
        },
      ],
    },
    "timeplus-enterprise",
    {
      type: "category",
      label: "Tutorials and Examples",
      link: {
        type: "generated-index",
      },
      items: ["sql-pattern-topn"],
    },
    {
      type: "category",
      label: "SQL Reference",
      collapsed: true,
      link: {
        type: "doc",
        id: "query-syntax",
      },
      items: [
        "datatypes",
        {
          type: "category",
          label: "Functions",
          collapsed: true,
          link: { type: "doc", id: "functions" },
          items: [
            "functions_for_type",
            "functions_for_comp",
            "functions_for_datetime",
            "functions_for_url",
            "functions_for_json",
            "functions_for_text",
            "functions_for_hash",
            "functions_for_random",
            "functions_for_agg",
            "functions_for_logic",
            "functions_for_math",
            "functions_for_fin",
            "functions_for_geo",
            "functions_for_streaming",
          ],
        },
        {
          type: "category",
          label: "UDF",
          link: { type: "doc", id: "udf" },
          items: ["remote-udf", "js-udf"],
        },
        "joins",
        {
          type: "category",
          label: "Query Patterns",
          link: { type: "doc", id: "usecases" },
          items: [],
        },
      ],
    },
    {
      type: "category",
      label: "Frequently Asked Questions",
      //collapsed: false,
      link: {
        type: "generated-index",
      },
      items: ["proton-faq", "faq"],
    },
    {
      type: "category",
      label: "What's New",
      //collapsed: false,
      link: {
        type: "doc",
        id: "release-notes",
      },
      items: [
        "public-beta-2",
        "public-beta-1",
        "private-beta-2",
        "private-beta-1",
      ],
    },
    {
      type: "category",
      label: "Additional Resources",
      link: {
        type: "generated-index",
      },
      items: ["getting-help", "credits"],
    },
  ],
};

module.exports = sidebars;
