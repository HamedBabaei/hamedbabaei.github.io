/**
 * Website Content Data
 * 
 * Edit this file to update your website content.
 * This file works both locally and when deployed to GitHub Pages.
 */

const WEBSITE_DATA = {
    // Research Highlights
    highlights: [
        {
            id: "ontoaligner",
            title: "OntoAligner",
            icon: "fa-project-diagram",
            image: "images/ontoaligner-logo.png", // Optional: remove this line to use icon only
            description: "A comprehensive, modular Python toolkit for ontology alignment. Lead maintainer of this open-source library that integrates LLMs, RAG techniques, and traditional matching methods for semantic interoperability.",
            tags: ["Python", "Ontology Matching", "LLMs", "ESWC 2025"],
            links: [
                {
                    text: "GitHub",
                    url: "https://github.com/sciknoworg/OntoAligner",
                    icon: "fab fa-github"
                },
                {
                    text: "Docs",
                    url: "https://ontoaligner.readthedocs.io/",
                    icon: "fas fa-book"
                },
                {
                    text: "PyPI",
                    url: "https://pypi.org/project/OntoAligner/",
                    icon: "fas fa-download"
                }
            ]
        },
        {
            id: "llms4ol",
            title: "LLMs4OL Challenge",
            icon: "fa-brain",
            image: "images/llms4ol-logo.png",
            description: "Co-organizer of the Large Language Models for Ontology Learning shared task, exploring how LLMs can automatically extract and structure knowledge from natural language text across various domains.",
            tags: ["Challenge", "ISWC 2024", "Community"],
            links: [
                {
                    text: "Challenge",
                    url: "https://github.com/sciknoworg/LLMs4OL-Challenge",
                    icon: "fas fa-trophy"
                }
            ]
        },
        {
            id: "llms4om",
            title: "LLMs4OM",
            icon: "fa-link",
            image: "images/llms4om-logo.png",
            description: "Framework for matching ontologies using Large Language Models, demonstrating that LLMs can match and surpass traditional ontology matching systems through zero-shot prompting and retrieval techniques.",
            tags: ["Ontology Matching", "RAG", "ESWC 2024"],
            links: [
                {
                    text: "GitHub",
                    url: "https://github.com/HamedBabaei/LLMs4OM",
                    icon: "fab fa-github"
                }
            ]
        },
        {
            id: "llms4synthesis",
            title: "LLMs4Synthesis",
            icon: "fa-file-alt",
            image: "images/llms4synthesis-logo.png",
            description: "Framework designed to enhance LLM capabilities in generating high-quality scientific syntheses, addressing the growing complexity and volume of scientific literature with automated synthesis generation.",
            tags: ["Scientific Writing", "NLG", "JCDL 2024"],
            links: [
                {
                    text: "GitHub",
                    url: "https://github.com/HamedBabaei/LLMs4Synthesis",
                    icon: "fab fa-github"
                }
            ]
        }
    ],

    // Publications
    publications: [
        {
            year: 2025,
            title: "OntoAligner: A Comprehensive Modular and Robust Python Toolkit for Ontology Alignment",
            authors: [
                {name: "Hamed Babaei Giglou", isMe: true},
                {name: "Jennifer D'Souza", isMe: false},
                {name: "Oliver Karras", isMe: false},
                {name: "Sören Auer", isMe: false}
            ],
            venue: "European Semantic Web Conference (ESWC) 2025 - Resource Track",
            links: [
                {
                    text: "Code",
                    url: "https://github.com/sciknoworg/OntoAligner",
                    icon: "fab fa-github"
                },
                {
                    text: "Docs",
                    url: "https://ontoaligner.readthedocs.io/",
                    icon: "fas fa-book"
                },
                {
                    text: "PyPI",
                    url: "https://pypi.org/project/OntoAligner/",
                    icon: "fas fa-download"
                }
            ]
        },
        {
            year: 2024,
            title: "LLMs4OM: Matching Ontologies with Large Language Models",
            authors: [
                {name: "Hamed Babaei Giglou", isMe: true},
                {name: "Jennifer D'Souza", isMe: false},
                {name: "Felix Engel", isMe: false},
                {name: "Sören Auer", isMe: false}
            ],
            venue: "The Semantic Web: ESWC 2024 Satellite Events",
            links: [
                {
                    text: "Code",
                    url: "https://github.com/HamedBabaei/LLMs4OM",
                    icon: "fab fa-github"
                },
                {
                    text: "Paper",
                    url: "https://link.springer.com/chapter/10.1007/978-3-031-78952-6_2",
                    icon: "fas fa-file-pdf"
                }
            ]
        },
        {
            year: 2024,
            title: "LLMs4OL 2024 Overview: The 1st Large Language Models for Ontology Learning Challenge",
            authors: [
                {name: "Hamed Babaei Giglou", isMe: true},
                {name: "Jennifer D'Souza", isMe: false},
                {name: "Sören Auer", isMe: false}
            ],
            venue: "Open Conference Proceedings, Vol. 4",
            links: [
                {
                    text: "Code",
                    url: "https://github.com/sciknoworg/LLMs4OL-Challenge",
                    icon: "fab fa-github"
                },
                {
                    text: "DOI",
                    url: "https://doi.org/10.52825/ocp.v4i.2473",
                    icon: "fas fa-external-link-alt"
                }
            ]
        },
        {
            year: 2024,
            title: "LLMs4Synthesis: Leveraging Large Language Models for Scientific Synthesis",
            authors: [
                {name: "Hamed Babaei Giglou", isMe: true},
                {name: "Jennifer D'Souza", isMe: false},
                {name: "Sören Auer", isMe: false}
            ],
            venue: "Joint Conference on Digital Libraries (JCDL) 2024",
            links: [
                {
                    text: "Code",
                    url: "https://github.com/HamedBabaei/LLMs4Synthesis",
                    icon: "fab fa-github"
                }
            ]
        },
        {
            year: 2023,
            title: "LLMs4OL: Large Language Models for Ontology Learning",
            authors: [
                {name: "Hamed Babaei Giglou", isMe: true},
                {name: "Jennifer D'Souza", isMe: false},
                {name: "Sören Auer", isMe: false}
            ],
            venue: "International Semantic Web Conference (ISWC) 2023 - Research Track",
            links: [
                {
                    text: "Code",
                    url: "https://github.com/HamedBabaei/LLMs4OL",
                    icon: "fab fa-github"
                },
                {
                    text: "Paper",
                    url: "https://link.springer.com/chapter/10.1007/978-3-031-47240-4_22",
                    icon: "fas fa-file-pdf"
                }
            ]
        },
        {
            year: 2023,
            title: "Automated Clinical Knowledge Graph Generation Framework for Evidence Based Medicine",
            authors: [
                {name: "Fakhare Alam", isMe: false},
                {name: "Hamed Babaei Giglou", isMe: true},
                {name: "Khalid Mahmood Malik", isMe: false}
            ],
            venue: "Expert Systems with Applications",
            links: [
                {
                    text: "DOI",
                    url: "https://doi.org/10.1016/j.eswa.2023.120964",
                    icon: "fas fa-external-link-alt"
                }
            ]
        }
    ],

    // Awards & Honors
    awards: [
        {
            year: 2020,
            title: "3rd Place - Digikala Cup Data Science Competition",
            organization: "Digikala (Iran's largest e-commerce company)",
            description: "Ranked 3rd among 250 participants in a data science competition",
            icon: "fa-trophy",
            link: {
                text: "View Leaderboard",
                url: "https://quera.ir"
            }
        },
        {
            year: 2019,
            title: "2nd Place - B.Sc. Computer Science Class",
            organization: "University of Mohaghegh Ardabili",
            description: "Ranked 2nd among B.Sc. Computer Science students (2014-2019)",
            icon: "fa-medal"
        },
        {
            year: 2016,
            title: "15th Place - ACM-ICPC Nationwide Contest",
            organization: "ACM-ICPC, Mazandaran, Iran",
            description: "Ranked 15th team among more than 90 teams in the 1st Nationwide Contest",
            icon: "fa-code"
        },
        {
            year: 2015,
            title: "50th Place - ACM-ICPC Internet Contest",
            organization: "ACM-ICPC, Tehran, Iran",
            description: "Ranked 50th team among more than 200 teams in the 13th Iran Nationwide Internet Contest",
            icon: "fa-code"
        }
    ]
};
