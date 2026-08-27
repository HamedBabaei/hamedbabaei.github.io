/**
 * Website Content Data
 * 
 * Edit this file to update your website content.
 * This file works both locally and when deployed to GitHub Pages.
 */

const WEBSITE_DATA = {
    // Total publication count across all venues (see Google Scholar for the full list).
    // The "publications" array below is a curated selection shown on the Publications page;
    // this number is used for the homepage stat and may exceed that array's length.
    publicationsTotal: 30,

    // Research Highlights
    highlights: [
        {
            id: "ontoaligner",
            title: "OntoAligner",
            icon: "fa-project-diagram",
            image: "images/ontoaligner-logo.png",
            description: "OntoAligner (a.k.a Ontology Aligner), is a Python library designed to simplify ontology alignment and matching for researchers, practitioners, and developers. With a modular architecture and robust features, OntoAligner provides powerful tools to bridge ontologies effectively.",
            tags: ["Python", "Ontology Alignment"],
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
            id: "ontolearner",
            title: "OntoLearner",
            icon: "fa-link",
            image: "images/ontolearner-logo.png",
            description: "OntoLearner is a modular, open-source Python framework purpose-built for modern ontology learning powered by LLMs. Rooted in decades of research in semantic web and NLP, OntoLearner integrates the breadth of existing ontology repositories with the reasoning and generative capabilities of state-of-the-art foundation models",
            tags: ["Python", "Ontology Learning"],
            links: [
                {
                    text: "GitHub",
                    url: "https://github.com/sciknoworg/OntoLearner",
                    icon: "fab fa-github"
                },
                {
                    text: "Docs",
                    url: "https://ontolearner.readthedocs.io/",
                    icon: "fas fa-book"
                },
                {
                    text: "PyPI",
                    url: "https://pypi.org/project/OntoLearner/",
                    icon: "fas fa-download"
                }
            ]
        },
        {
            id: "yescieval",
            title: "YESciEval",
            icon: "fa-file-alt",
            image: "images/yescieval-logo.png",
            description: "YESciEval provides a comprehensive library for evaluating the quality of synthesized scientific answers using predefined rubrics and sophisticated LLM-based judgment models. This framework enables you to assess answers on key criteria by utilizing pretrained judges and parsing LLM outputs into structured JSON formats.",
            tags: ["LLM-as-a-Judge", "Scientific QA"],
            links: [
                {
                    text: "GitHub",
                    url: "https://github.com/sciknoworg/YESciEval",
                    icon: "fab fa-github"
                },
                {
                    text: "Docs",
                    url: "https://yescieval.readthedocs.io/",
                    icon: "fas fa-book"
                },
                {
                    text: "PyPI",
                    url: "https://pypi.org/project/YESciEval/",
                    icon: "fas fa-download"
                }
            ]
        },
        {
            id: "llms4ol",
            title: "LLMs4OL Challenge",
            icon: "fa-brain",
            image: "images/llms4ol-logo.jpg",
            description: "LLMs4OL: Large Language Models for Ontology Learning challenge. Exploring how LLMs can automatically extract and structure knowledge from natural language text across various domains.",
            tags: ["Ontology Learning", "ISWC 2024", "ISWC 2025", "Co-organizer"],
            links: [
                {
                    text: "Challenge Website",
                    url: "https://sites.google.com/view/llms4ol",
                    icon: "fas fa-trophy"
                },
                {
                    text: "GitHub",
                    url: "https://github.com/sciknoworg/LLMs4OL-Challenge",
                    icon: "fab fa-github"
                }
            ]
        },
        {
            id: "llms4om",
            title: "LLMs4OM",
            icon: "fa-file-alt",
            image: "images/llms4om-logo.png",
            description: "This framework is a novel approach for effective OA using LLMs. This framework utilizes two modules for retrieval and matching, respectively, enhanced by zero-shot prompting across three ontology representations: concept, concept-parent, and concept-children. ",
            tags: ["Ontology Matching", "RAG", "LLMs"],
            links: [
                {
                    text: "GitHub",
                    url: "https://github.com/HamedBabaei/LLMs4OM",
                    icon: "fab fa-github"
                },
                {
                    text: "Docs",
                    url: "https://ontoaligner.readthedocs.io/aligner/rag.html",
                    icon: "fas fa-book"
                }
            ]
        },
        {
            id: "llms4synthesis",
            title: "LLMs4Synthesis",
            icon: "fa-file-alt",
            image: "images/llms4synthesis-logo.png",
            description: "This work introduces the LLMs4Synthesis framework to improve how LLMs generate and evaluate high-quality scientific syntheses. It defines new synthesis types and quality criteria while integrating RL and AI feedback to enhance reliability and coherence.",
            tags: ["Scientific QA", "RL", "LLMs"],
            links: [
                {
                    text: "GitHub",
                    url: "https://github.com/HamedBabaei/LLMs4Synthesis",
                    icon: "fab fa-github"
                },
                {
                    text: "Docs",
                    url: "https://hamedbabaei.github.io/LLMs4Synthesis/",
                    icon: "fas fa-book"
                }
            ]
        },
        {
            id: "llms4ol",
            title: "LLMs4OL",
            icon: "fa-file-alt",
            image: "images/LLMs4OL.jpg",
            description: "Ontology Learning (OL) focuses on automatically acquiring and structuring knowledge across domains. We introduce the LLMs4OL paradigm to empirically investigate whether LLMs can effectively leverage their linguistic understanding to support automated ontology construction.",
            tags: ["Ontology Learning", "LLMs"],
            links: [
                {
                    text: "GitHub",
                    url: "https://github.com/HamedBabaei/LLMs4OL",
                    icon: "fab fa-github"
                },
                {
                    text: "Docs",
                    url: "https://hamedbabaei.github.io/LLMs4OL/",
                    icon: "fas fa-book"
                }
            ]
        },
        {
            id: "ava",
            title: "AVA",
            icon: "fa-vial",
            image: null,
            description: "AVA (\"Do General NLP Embeddings Capture Ontological Reasoning?\") is a benchmark of 171,007 contrastive triplets built from 163 heterogeneous OWL/RDFS ontologies, testing whether general-purpose sentence embeddings (E5, GTE, BGE, OpenAI text-embedding-3, etc.) genuinely encode ontological/logical structure or merely match lexical overlap.",
            tags: ["Python", "Benchmark", "Ontological Reasoning", "CIKM 2025"],
            links: [
                {
                    text: "GitHub",
                    url: "https://github.com/sciknoworg/AVA",
                    icon: "fab fa-github"
                }
            ]
        },
    ],

    // Publications
    publications: [
        {
            year: 2025,
            title: "AVA: Do General NLP Embeddings Capture Ontological Reasoning?",
            authors: [
                {name: "Hamed Babaei Giglou", isMe: true},
                {name: "Jennifer D'Souza", isMe: false},
                {name: "Sören Auer", isMe: false}
            ],
            venue: "The 34th ACM International Conference on Information and Knowledge Management (CIKM) 2025 - Short Paper Track",
            links: [
                {
                    text: "Code",
                    url: "https://github.com/sciknoworg/AVA",
                    icon: "fab fa-github"
                }
            ]
        },
        {
            year: 2025,
            title: "OntoAligner Meets Knowledge Graph Embedding Aligners",
            authors: [
                {name: "Hamed Babaei Giglou", isMe: true},
                {name: "Jennifer D'Souza", isMe: false},
                {name: "Sören Auer", isMe: false},
                {name: "Mahsa Sanaei", isMe: false}
            ],
            venue: "The 20th International Workshop on Ontology Matching-- OM 2025.",
            links: [
                {
                    text: "Docs",
                    url: "https://ontoaligner.readthedocs.io/aligner/kge.html",
                    icon: "fas fa-book"
                },
                {
                    text: "Paper",
                    url: "https://ceur-ws.org/Vol-4144/om2025-LTpaper4.pdf/",
                    icon: "fas fa-file-pdf"
                },
                {
                    text: "Slides",
                    url: "https://doi.org/10.13140/RG.2.2.14859.14888",
                    icon: "fas fa-file-pdf"
                },

            ]
        },
        {
            year: 2025,
            title: "YESciEval: Robust LLM-as-a-Judge for Scientific Question Answering",
            authors: [
                {name: "Jennifer D'Souza", isMe: false},
                {name: "Hamed Babaei Giglou", isMe: true},
                {name: "Quentin Münch", isMe: false}
            ],
            venue: "The 63rd Annual Meeting of the Association for Computational Linguistics 2025-- ACL 2025 Main Track.",
            links: [
                {
                    text: "Code",
                    url: "https://github.com/sciknoworg/YESciEval",
                    icon: "fab fa-github"
                },
                {
                    text: "Docs",
                    url: "https://yescieval.readthedocs.io/",
                    icon: "fas fa-book"
                },
                {
                    text: "PyPI",
                    url: "https://pypi.org/project/YESciEval/",
                    icon: "fas fa-download"
                },
                {
                    text: "Paper",
                    url: "https://aclanthology.org/2025.acl-long.675/",
                    icon: "fas fa-file-pdf"
                },
                {
                    text: "YESciEval Corpus",
                    url: "https://data.uni-hannover.de/th/dataset/yescieval-corpus",
                    icon: "fas fa-external-link-alt"
                },
                {
                    text: "YESciEval HuggingFace",
                    url: "https://huggingface.co/collections/SciKnowOrg/yescieval-judges",
                    icon: "fas fa-external-link-alt"
                },
            ]
        },
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
                },
                {
                    text: "Paper",
                    url: "https://link.springer.com/chapter/10.1007/978-3-031-94578-6_10",
                    icon: "fas fa-file-pdf"
                },
                {
                    text: "Slides",
                    url: "https://doi.org/10.13140/RG.2.2.31426.49601",
                    icon: "fas fa-file-pdf"
                },
                {
                    text: "Presentation",
                    url: "https://videolectures.net/videos/eswc2025_bernardin_babaei_giglu",
                    icon: "fa-solid fa-video"
                },
                {
                    text: "Best Resource Paper Award",
                    url: "https://2025.eswc-conferences.org/eswc-2025-best-paper-reviewer-awards/",
                    icon: "fa-solid fa-medal"
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
                },
                {
                    text: "GitHub Page",
                    url: "https://hamedbabaei.github.io/LLMs4Synthesis/",
                    icon: "fas fa-book"
                },
                {
                    text: "Paper",
                    url: "https://dl.acm.org/doi/10.1145/3677389.3702565",
                    icon: "fas fa-file-pdf"
                },
                {
                    text: "Slides",
                    url: "https://doi.org/10.13140/RG.2.2.29931.25122",
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
            venue: "The 1st LLMs4OL Challenge @ ISWC 2024",
            links: [
                {
                    text: "Code",
                    url: "https://github.com/sciknoworg/LLMs4OL-Challenge",
                    icon: "fab fa-github"
                },
                {
                    text: "1st LLMs4OL Challenge @ ISWC 2024",
                    url: "https://sites.google.com/view/llms4ol2024/",
                    icon: "fas fa-external-link-alt"
                },
                {
                    text: "Paper",
                    url: "https://doi.org/10.52825/ocp.v4i.2473",
                    icon: "fas fa-file-pdf"
                },
                {
                    text: "Slides",
                    url: "https://doi.org/10.13140/RG.2.2.11068.35200",
                    icon: "fas fa-file-pdf"
                }
            ]
        },
        {
            year: 2024,
            title: "Scholarly Question Answering Using Large Language Models in the NFDI4DataScience Gateway",
            authors: [
                {name: "Hamed Babaei Giglou", isMe: true},
                {name: "Tilahun Abedissa Taffa", isMe: false},
                {name: "Rana Abdullah", isMe: false},
                {name: "Aida Usmanova", isMe: false},
                {name: "Ricardo Usbeck", isMe: false},
                {name: "Jennifer D'Souza", isMe: false},
                {name: "Sören Auer", isMe: false}
            ],
            venue: "International Workshop on Natural Scientific Language Processing and Research Knowledge Graphs (NSLP 2024)\n",
            links: [
                {
                    text: "Code",
                    url: "https://github.com/semantic-systems/nfdi-search-engine-chatbot",
                    icon: "fab fa-github"
                },
                {
                    text: "NFDI4DS Gateway",
                    url: "https://nfdi-search.nliwod.org/",
                    icon: "fas fa-external-link-alt"
                },
                {
                    text: "Paper",
                    url: "https://doi.org/10.1007/978-3-031-65794-8_1",
                    icon: "fas fa-file-pdf"
                },
                {
                    text: "Slides",
                    url: "https://doi.org/10.13140/RG.2.2.26413.60644",
                    icon: "fas fa-file-pdf"
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
            venue: "ESWC 2024--Special Track on LLMs for Knowledge Engineering\n",
            links: [
                {
                    text: "Code",
                    url: "https://github.com/HamedBabaei/LLMs4OM",
                    icon: "fab fa-github"
                },
                {
                    text: "GitHub Page",
                    url: "https://hamedbabaei.github.io/LLMs4OM/",
                    icon: "fas fa-book"
                },
                {
                    text: "Paper",
                    url: "https://arxiv.org/abs/2404.10317",
                    icon: "fas fa-file-pdf"
                },
                {
                    text: "Slides",
                    url: "https://doi.org/10.13140/RG.2.2.10832.42240",
                    icon: "fas fa-file-pdf"
                },
                {
                    text: "Presentation",
                    url: "https://videolectures.net/videos/eswc2024_babaei_giglou_language_models",
                    icon: "fa-solid fa-video"
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
                    text: "GitHub Page",
                    url: "https://hamedbabaei.github.io/LLMs4OL/",
                    icon: "fas fa-book"
                },
                {
                    text: "Paper",
                    url: "https://link.springer.com/chapter/10.1007/978-3-031-47240-4_22",
                    icon: "fas fa-file-pdf"
                },
                {
                    text: "Slides",
                    url: "https://doi.org/10.13140/RG.2.2.26351.34723",
                    icon: "fas fa-file-pdf"
                },
                {
                    text: "Presentation",
                    url: "https://videolectures.net/videos/iswc2023_babaei_giglou_ontology_learning",
                    icon: "fa-solid fa-video"
                }
            ]
        }
    ],

    // Awards & Honors
    awards: [
        {
            year: 2025,
            title: "Best Resource Paper Award - OntoAligner",
            organization: "European Semantic Web Conference (ESWC) 2025",
            description: "Awarded for \"OntoAligner: A Comprehensive Modular and Robust Python Toolkit for Ontology Alignment.\"",
            icon: "fa-award",
            link: {
                text: "View Award",
                url: "https://2025.eswc-conferences.org/eswc-2025-best-paper-reviewer-awards/"
            }
        },
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
    ],

    // Skills (from CV)
    skills: {
        programmingLanguages: [
            { name: "Python", level: 5 },
            { name: "JavaScript", level: 4 },
            { name: "C / C++", level: 3 },
            { name: "HTML5 & CSS3", level: 3 }
        ],
        categories: [
            {
                title: "Machine Learning",
                icon: "fa-chart-line",
                items: ["Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn", "MATLAB", "SciPy"]
            },
            {
                title: "Deep Learning",
                icon: "fa-brain",
                items: ["Transformers", "Sentence-Transformers", "TensorFlow", "PyTorch"]
            },
            {
                title: "Natural Language Processing",
                icon: "fa-comments",
                items: ["NLTK", "Gensim", "spaCy", "Pattern", "LangChain"]
            },
            {
                title: "Semantic Web",
                icon: "fa-diagram-project",
                items: ["SPARQL", "Owlready2", "RDFLib"]
            },
            {
                title: "Databases",
                icon: "fa-database",
                items: ["PostgreSQL", "MongoDB", "Neo4j"]
            },
            {
                title: "Model Optimization",
                icon: "fa-gauge-high",
                items: ["ONNX", "ONNX Runtime", "Quantization"]
            },
            {
                title: "Deployment",
                icon: "fa-server",
                items: ["Flask", "Docker", "FastAPI"]
            },
            {
                title: "UI Prototyping",
                icon: "fa-desktop",
                items: ["Streamlit"]
            },
            {
                title: "Version Control",
                icon: "fa-code-branch",
                items: ["Git", "GitHub", "GitLab"]
            },
            {
                title: "Operating Systems",
                icon: "fa-terminal",
                items: ["Linux (Ubuntu)", "Windows"]
            },
            {
                title: "Agentic AI Coding",
                icon: "fa-robot",
                items: ["Claude Code", "GitHub Copilot", "Cursor"]
            }
        ],
        spokenLanguages: [
            { name: "English", level: 5 },
            { name: "Azerbaijani (Azari)", level: 5 },
            { name: "Persian (Farsi)", level: 5 },
            { name: "Turkish", level: 4 },
            { name: "German", level: 1 }
        ]
    }
};
