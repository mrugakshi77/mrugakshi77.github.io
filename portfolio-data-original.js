// EDIT THIS FILE TO UPDATE YOUR PORTFOLIO CONTENT
// All text, jobs, projects, etc. are here for easy modification

const portfolioData = {
    // Header Information
    name: "Mrugakshi Chidrawar",
    title: "Bioinformatics Engineer",
    
    // Contact Information
    email: "mrugakshi77@gmail.com",
    phone: "+1 (857) 498-4162",
    location: "Santa Clara, CA",
    
    // Links
    github: "https://github.com/mrugakshi77/",
    linkedin: "https://www.linkedin.com/in/mrugakshi-chidrawar-827127179/",
    vepPlatform: "https://vep.corces.gladstone.org/",
    
    // Hero Section
    heroHeading: "Bridging Computation & Biology",
    heroSubtitle: "Building tools that turn genomic data into biological insights",
    heroDescription: "I'm a bioinformatics engineer with 3+ years building NGS pipelines, ML-powered variant prediction, and production research platforms. I thrive at the intersection of computational biology and wet lab science, translating complex genomic workflows into accessible tools that empower discovery.",
    
    // Experience (Easy to edit!)
    experience: [
        {
            id: 1,
            icon: '🧬',
            title: 'Bioinformatician',
            company: 'Gladstone Institutes (Corces Lab)',
            dates: 'Jan 2023 – Jan 2026',
            tags: ['NGS', 'ML', 'snMultiome', 'HPC'],
            logo: 'Gladstone_Institutes_logo.jpg',
            highlights: [
                'Developed & deployed VEP Platform analyzing 22M+ noncoding variants using ChromBPNet deep learning',
                'Built high-throughput snMultiome pipeline for Alzheimer\'s & Parkinson\'s research, reducing compute time by 40%',
                'Performed computational CRISPR HDR edit site selection for CAMK4 variant editing',
                'Developed bulk ATAC-seq Snakemake pipeline for ancestry-specific regulatory elements',
                'Served as primary computational collaborator for 12-14 wet lab scientists; mentored bioinformatics intern'
            ]
        },
        {
            id: 2,
            icon: '💊',
            title: 'Bioinformatics & Data Science Intern',
            company: 'Pfizer',
            dates: 'May 2022 – Dec 2022',
            tags: ['GWAS', 'SuSiE', 'Multi-omics', 'Fine-mapping'],
            logo: 'pfizer.png',
            highlights: [
                'Identified two independent genetic signals at HAL locus using GWAS summary statistics & SuSiE fine-mapping',
                'Discovered 16 colocalized protein-metabolite QTL pairs with concordant directional effects across tissues',
                'Benchmarked SuSiE & SuSiE-inf on metabolite datasets for reliable summary-statistics-based fine-mapping'
            ]
        },
        {
            id: 3,
            icon: '🔬',
            title: 'Research Assistant',
            company: 'Boston University & UC Berkeley',
            dates: 'Jan 2022 – May 2022',
            tags: ['Python', 'CarveMe', 'HPC', 'SQL'],
            logo: 'bu.png',
            highlights: [
                'Developed Python pipeline to explore genome-scale metabolic models using CarveMe on Linux/HPC',
                'Built web-based UI backed by scalable SQL database to automate genome/media file management',
                'Streamlined data exploration workflows for wet lab scientists'
            ]
        },
        {
            id: 4,
            icon: '⚡',
            title: 'Associate Software Developer',
            company: 'Energy Exemplar – India Dev Center',
            dates: 'Nov 2020 – Jul 2021',
            tags: ['Vue.js', 'Django', 'BI', 'Cloud'],
            logo: 'energy_exemplar.jfif',
            highlights: [
                'Developed foundational full-stack development skills using Vue.js and Django',
                'Enhanced cloud-based BI reporting capabilities on Linux environments',
                'Contributed to product design and data visualization'
            ]
        }
    ],
    
    // Projects
    projects: [
        {
            id: 1,
            icon: '🎯',
            title: 'Cancer Type Classification from Gene Expression',
            date: 'Jan 2026',
            shortDesc: 'ML classifier on TCGA RNA-seq data',
            tags: ['ML', 'Python', 'RNA-seq'],
            github: 'https://github.com/mrugakshi77/TCGA_Cancer_classification',
            description: 'Developed ML classifier achieving 99.38% accuracy on TCGA bulk RNA-seq data.',
            details: [
                '801 samples, 5 cancer types',
                'Feature selection: 20,531 → 1,000 genes',
                'Logistic Regression & Random Forest with class balancing',
                'Cross-validation for robust performance'
            ]
        },
        {
            id: 2,
            icon: '🧠',
            title: 'CHOIR-based Single-Cell Reanalysis of Mouse Hypothalamus',
            date: 'Jul 2025',
            shortDesc: 'scRNA-seq reanalysis revealing OPC subtypes',
            tags: ['scRNA-seq', 'R', 'CHOIR'],
            github: 'https://github.com/mrugakshi77/CHOIR_Chen_et_al_2017_Comparison',
            description: 'Reprocessed Chen et al. (2017) scRNA-seq dataset with CHOIR clustering.',
            details: [
                'Refined clustering from 45 to 47 clusters',
                'Identified two OPC subtypes suggesting biological heterogeneity',
                'GO enrichment and Wilcoxon tests for characterization',
                'UMAP visualization with marker gene plots'
            ]
        },
        {
            id: 3,
            icon: '🍞',
            title: 'scRNA-seq Analysis of Yeast Stress Response',
            date: 'Jun 2025',
            shortDesc: 'SMART-seq pipeline for stress response characterization',
            tags: ['scRNA-seq', 'Python', 'Yeast'],
            github: 'https://github.com/mrugakshi77/Gasch2017_yeast_scRNAseq_replication',
            description: 'Plate-based SMART-seq single-cell RNA-seq analysis pipeline.',
            details: [
                'Developed from scratch for cell-level expression profiling',
                'Reproduced key findings from Gasch et al. (2017)',
                'Stress gene module scoring (RP and iESR)',
                'Cell-to-cell transcriptional variation visualization'
            ]
        }
    ],
    
    // Skills
    skills: [
        {
            id: 1,
            icon: '🔬',
            name: 'Bioinformatics',
            shortList: 'NGS, GWAS, scRNA-seq...',
            tags: ['NGS', 'GWAS', 'RNA-seq', 'ATAC-seq'],
            skills: ['NGS Pipeline Development', 'GWAS & Fine-mapping', 'Single-cell RNA-seq', 'Variant Effect Prediction', 'CRISPR Design', 'Statistical Genomics', 'Machine Learning', 'Snakemake Workflows']
        },
        {
            id: 2,
            icon: '⚙️',
            name: 'Programming',
            shortList: 'Python, R, SQL...',
            tags: ['Python', 'R', 'SQL', 'Docker'],
            skills: ['Python Data Analysis', 'R Statistical Analysis', 'SQL Databases', 'Docker Containers', 'Git Version Control', 'Flask Web Development', 'Vue.js Frontend', 'Linux/HPC']
        },
        {
            id: 3,
            icon: '☁️',
            name: 'Infrastructure',
            shortList: 'HPC, Cloud, Linux...',
            tags: ['HPC', 'Cloud', 'Linux', 'Conda'],
            skills: ['HPC Optimization', 'Cloud Computing (AWS)', 'Conda Environments', 'Linux Administration', 'Database Design', 'Production Deployment', 'Data Visualization', 'Web Development']
        }
    ],
    
    // Education
    education: [
        {
            id: 1,
            icon: '🎓',
            logo: 'bu.png',
            title: 'M.S. Bioinformatics',
            school: 'Boston University',
            period: 'Sep 2021 – Jan 2023',
            gpa: '4.0/4.0',
            details: 'Advanced coursework in genomics, bioinformatics pipelines, statistical analysis, and computational biology research.'
        },
        {
            id: 2,
            icon: '🎓',
	    logo: 'PICT.jfif',
            title: 'B.E. Computer Engineering',
            school: 'Pune Institute of Computer Technology',
            period: 'Aug 2016 – Aug 2020',
            gpa: '9.26/10',
            details: 'Strong foundation in computer science, algorithms, databases, and software development principles.'
        }
    ]
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
