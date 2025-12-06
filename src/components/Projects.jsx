import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.projects-title', {
                scrollTrigger: {
                    trigger: '.projects-title',
                    start: 'top 80%',
                },
                opacity: 0,
                y: -50,
                duration: 0.8,
                ease: 'power3.out'
            });

            gsap.from('.projects-subtitle', {
                scrollTrigger: {
                    trigger: '.projects-subtitle',
                    start: 'top 80%',
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.2,
                ease: 'power3.out'
            });

            gsap.from('.project-card', {
                scrollTrigger: {
                    trigger: '.project-card',
                    start: 'top 80%',
                },
                opacity: 0,
                y: 50,
                scale: 0.9,
                duration: 0.8,
                stagger: 0.2,
                ease: 'back.out(1.7)'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="projects" className="bg-background-light dark:bg-background-dark font-display text-slate-700 dark:text-slate-300 antialiased">
            <div className="py-16 sm:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="projects-title text-4xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
                            Featured <span className="text-primary dark:text-primary-light">Projects</span>
                        </h2>
                        <p className="projects-subtitle mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Here are some of the projects I'm most proud of.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-10 lg:gap-12 md:grid-cols-2">
                        <div className="group relative flex flex-col rounded-xl transition-all duration-300 hover:scale-105">
                            <div className="absolute -inset-2 rounded-xl bg-primary-light/30 blur-2xl transition-all duration-500 group-hover:bg-primary-light/40"></div>
                            <div className="relative flex flex-col h-full rounded-xl bg-slate-100 dark:bg-slate-900 overflow-hidden ring-1 ring-primary-light/30">
                                <div className="overflow-hidden">
                                    <img alt="Screenshot of the HavenKeys real estate application" className="w-full h-56 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAurrAx291il58OM1vZ0mV8iQQaaGSjdFXeik_5tWmmPqZDR-vEc41ghy8DEoPWmeFTEEze8RYpF4vrMkI1lbWueu1RXt11n8JKNVne81_G-n95---Nn7UDNFnDh3n1G9hnZkuPFr6XKbBrMkPcbFCah8108xJrokQquVK9uDLTgnxjQLK1r0Yi170gBk8vLW2_2BB6DT7AY0PTbLOEhiqb665HDKic6qwe4jlHhIFWiNjLdFpJaYeLog96zSG0QipLR8rfOG9-PQ2L" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-50">HavenKeys</h3>
                                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 flex-grow leading-relaxed">
                                        A real estate app with secure login, property filters, and Stripe-powered premium listing options.
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <div className="flex items-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 py-1 px-3">
                                            <img alt="React icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQr-kYFNNVMu-ECYBDTunqv8bEzOwcwX_D7q_lUE6VBbwUep8u12Lk3QXWs0o0DyaRCvHsY7D6uH_BT324VEIBJrXQ-xybnofTLFhnvqmLzeD_tgTSYmDqkH6-kGQ45X_Fnp1aYqxlBd0W9q__7r1_Yw1l-xlHv6K1kCgQ2s6CHu3q3aIqdVBkA1M04I1h7iENyEjkYSLLO-gnRVeV4nN1d2tKGXScWGuY1mpoTIrM-N4PtQPiF20O6EkxU5NAYxWyix0Iv6HCP6zH" />
                                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">React</span>
                                        </div>
                                        <div className="flex items-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 py-1 px-3">
                                            <img alt="Express icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGFzamp0HFNC9KoGCdNtKdcZaqOLPCDRIyHM4LGaPPMsL8rRmggSd5T9C-zkwES1zEte9YpY2JiFuxLcaNhLAGtE_xRQoCKPj0E6Qz5mmuclm53nOo0ITue9udfvd7LpSh0mRcdU7jloHiRPy9-Nm2_nGnF97OJ4VMH_ukJq0fSFfl6j5Tml0ccAELejCSvE3nAJ5WK3fmFxkfFqBk_nDs_5pbmhA8LTPGo31fgDoZ_qvTNdqPhFBWZzTBwpps0yGqyEYHCYGyM3C8" />
                                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Express</span>
                                        </div>
                                        <div className="flex items-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 py-1 px-3">
                                            <img alt="Stripe icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVcEetuaBXWpEzUffzsa4pXEV8QXzMrveTtUQTP_HwwJ3E2O3Hn9CCkSWy7D1RvJretohebucQ_JKpRR_OgIYpcUCGKerp2tRgAKbVl3jQxnKKTKJNzemut7NslImR_RJqMNIDEIxv7sS_vUpTGWERr43bOHcr2XdFARp9yxUgh5umaGMCyAsZbKmoJJm08uGLZpCi7kNqs3lhbbtC8YxXJNOdtabf4oKPdUjmss7IdaJ7bSLLoEtPPbM9VoIWb3CGxjQ86KuRXzbN" />
                                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Stripe</span>
                                        </div>
                                        <div className="flex items-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 py-1 px-3">
                                            <img alt="JWT icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApMZrUYS4v5Fb0a0A415-1JAZqEza5-rJwRkKhHdNiVAUemSC2fAcRjDmG5rMLiWs1rvJ9_6eAEb_dcxWiPq2d4N-KQi3mqUG4UkRYwDIxe7QIZP28b13fkgJkVRgg-s3y9_s5Tzi9BFxWqL1YxwL2C39p7KHzVi0g2O4-9ojt-nIADvet7HcFvzwBuJLW_PO1mf8ltUHEfL0kHI6hzw7RYDfB7C9CRR2DcGeaY-FK3Sbg8ebU5ibanW-6swq3uVr9LCAXDTqkQVVM" />
                                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">JWT</span>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex items-center space-x-4 text-sm font-semibold">
                                        <a className="flex items-center gap-2 rounded-md bg-primary-light/10 dark:bg-primary-light/10 px-3 py-2 text-primary-dark dark:text-primary-light shadow-button-glow transition-all hover:bg-primary-light/20 hover:scale-105" href="#">
                                            <span className="material-symbols-outlined text-lg">link</span>
                                            Live Site
                                        </a>
                                        <a className="flex items-center gap-2 rounded-md bg-primary-light/10 dark:bg-primary-light/10 px-3 py-2 text-primary-dark dark:text-primary-light shadow-button-glow transition-all hover:bg-primary-light/20 hover:scale-105" href="#">
                                            <img alt="GitHub icon" className="h-5 w-5 invert-0 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIrAVDGLR7QVAirwOJRmpXIsDcWgCteP55jxM-gh8cPvX0PEIgoZtdIFV6AQ1iF-D5eaRCgfX2O4OM84wzC7NqVG_EV8NdeWV-EIOnOw7Kf-pQxAONSq_3g-er5FHJgMQdQbyelmETU2bHJr3xCBstZyMYvGC1e4X64ve6aCPM2U14w6tyjB0nB8mzmtl0S5YNGQ5eJjUlybPk-xKqHkvg-d8foDmN0OFIPTOTXlxpiFBsS2nGbVShMHxEiQhTc8rSj1QMJxMb0foX" />
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative flex flex-col rounded-xl transition-all duration-300 hover:scale-105">
                            <div className="absolute -inset-2 rounded-xl bg-primary-light/30 blur-2xl transition-all duration-500 group-hover:bg-primary-light/40"></div>
                            <div className="relative flex flex-col h-full rounded-xl bg-slate-100 dark:bg-slate-900 overflow-hidden ring-1 ring-primary-light/30">
                                <div className="overflow-hidden">
                                    <img alt="Screenshot of the Marathon Zone application for runners" className="w-full h-56 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRKCPQLfRLXm6Sfa-QnUqm68FfUepmN7XXFoo9nwqBtKpVlUjHIyspCt0C45H5-34_ePFPmQ3jZfOAMLOqg0CKKAR1TaZFqJjyCA8TPfSuNMPJweuu7qgtS56A-ZEfcZ7pPX2MwztUtKetg_L5wXq3nl7nZMeOLGBjvvFXG_7achhQL12pDECf5kVpJIK6CUZCJsqtRgHIMdDJqP9F0RowRUWrmOYtlvD-T4W8x1pdIVdyxOIzz6DpsO0NJdGjhHBYpLH9o421XPFk" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-50">Marathon Zone</h3>
                                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 flex-grow leading-relaxed">
                                        A full-stack event platform connecting marathon organizers and participants with real-time features and dark mode.
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <div className="flex items-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 py-1 px-3">
                                            <img alt="React icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFy1ZIqqjjEoKUdyLsTrlOrR-OyD_Wwf4fzG1TFrN9IaB0qfz_VQ2iNUVT8bMNu4uK13j9iRbsZRnRsiGcjczZyVKDr1Z02ckD_fqdA2ISnv9cFFsEUZhXR_wRY-JSsTYi_b7q7-0jfOAASjr9abKfI0jRd5N9jHn7Pyfje63oTtfYqDR3A1CPG7vErlxmZ5-1FzMr0jKGwC9x8BGK3UKVeQN6COuu3CWEBU8AnyApSCGSi9Fsxu4ZN6CzjGYhsl63gT7J-UAuaZZm" />
                                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">React</span>
                                        </div>
                                        <div className="flex items-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 py-1 px-3">
                                            <img alt="Firebase icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYx_Loylc8UxPkITNtqzlCLCX2loPICUXlpMTbf3ycSQ2V_iCrv4ndrEcAUrx2rQL6xWTFWkCs0yNRiziEdTk5p9az7118Up9r3fh1eYJPnKiOAKqW8NzdyI1uQdZnUWXft658bsghW5LpxkUKs53wAWnefop77s_SBaL1qBUh4BTbZ9cFwuAstZZGy-4SjOcop4cSrW65q7d4yLG4aQwwpNOOIqVdY12YVsWbB7VrFvsUry2MXDGB6B3ALgaD0gPXHLQMw566a8o4" />
                                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Firebase</span>
                                        </div>
                                        <div className="flex items-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 py-1 px-3">
                                            <img alt="Node.js icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1whiHjCeIH354ccAS3gL6LSP4iKJ_AQPW9r-Dc4nIsaIl_bwSpWKvuj1nS3LuEmHOY17BYuFAa6k1bUmQGT6QnxgSNB2WL-3N_LMUKLM4TM28Azx-AeyX54vm45avYBzTxaQtgpJNbRW089di6Ee9FWAm_U3ptMQKYeQ1BexYicFC2-m4qBZRJ-fr2q1X9asFlQ1_pjSNyeePI6glARbRy1-gIUph99PMTkvZMRub3UgAomYAnwjh9EVx_VmM4rf7GpPyoWS7vJ1l" />
                                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Node.js</span>
                                        </div>
                                        <div className="flex items-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 py-1 px-3">
                                            <img alt="MongoDB icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXQG2jP7_HcXrIGQr9IXKEMCccQv6YXtOVQs-tDw-4yXpVLRzwHGFGOYBoO8NjzHwBxnRGu3f1o2I8yuvuoBGCqhAUzp81f5KAo2g7MdQSLuvcohwJ1Pv92E-lWmTSmNDa_fPyfsNkEce-IDWjrQ3rNC6F7_T96XYhXkfm662WJXDoIKwlhaZYTDh2iUpcRonl1OOaARejKZUk1FDvvsI8qIz6hJRXGYhUTif4BGZpt682rTrMZMjJhJCgfWI1KluiVadOpfngyp-q" />
                                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">MongoDB</span>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex items-center space-x-4 text-sm font-semibold">
                                        <a className="flex items-center gap-2 rounded-md bg-primary-light/10 dark:bg-primary-light/10 px-3 py-2 text-primary-dark dark:text-primary-light shadow-button-glow transition-all hover:bg-primary-light/20 hover:scale-105" href="#">
                                            <span className="material-symbols-outlined text-lg">link</span>
                                            Live Site
                                        </a>
                                        <a className="flex items-center gap-2 rounded-md bg-primary-light/10 dark:bg-primary-light/10 px-3 py-2 text-primary-dark dark:text-primary-light shadow-button-glow transition-all hover:bg-primary-light/20 hover:scale-105" href="#">
                                            <img alt="GitHub icon" className="h-5 w-5 invert-0 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlMfznBmNWkscPMafuGPIl-wT1EQ5oVQ3xIjBri7_TvZEq9V92GlburZOQciVBUTImDBn2vK1mDQnyDLJOaRUTL8oDS9ihYCU4vz0TYu8ZA1eXHg4Cv4gP_ZEJNFH0dMVb4TAozQu94SL9UIUJTxoKNUBkdHB0ON9Axe84CWUtn-Re2DB2bkUIsys8eiZ5swh6n4cdKL7PUGGCeCBCbKzFz9sifM-9vIWvelyGwEx1U2gXH8yniCL6X3Ch6eEM9kdQMrsEePKYZ1Ei" />
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative flex flex-col rounded-xl transition-all duration-300 hover:scale-105">
                            <div className="absolute -inset-2 rounded-xl bg-primary-light/30 blur-2xl transition-all duration-500 group-hover:bg-primary-light/40"></div>
                            <div className="relative flex flex-col h-full rounded-xl bg-slate-100 dark:bg-slate-900 overflow-hidden ring-1 ring-primary-light/30">
                                <div className="overflow-hidden">
                                    <img alt="Screenshot of the Green Circle gardening subscription platform" className="w-full h-56 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUYp5hpUgm-59yyiHKWPSk9bhewPDwhPneNoEF2GxJJ4sHp-MXZQXTbg48xqZzopp-qOhWMt3lj0gY3cpr2aHLGUm1Rj3xmNuLq2ydR_mKbGjvrBzOfb95ZezLGoAMi2o2EVQjiQe5BdVzKKcFBR0xFFSGszYQQ8HLzYkg2YBOE4UtcF5IeSWigPfxgUW52dVviK6AAcoFKTlbtI2EPz0jWl-ZsCW_hLGspbxN4SxrxQoBj96OvcZW4y4hpiVYPq0n3fsgoucppeEL" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-50">Green Circle</h3>
                                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 flex-grow leading-relaxed">
                                        A gardening subscription platform with secure payments, real-time slot booking, and full admin dashboard.
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <div className="flex items-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 py-1 px-3">
                                            <img alt="JavaScript icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2qSYCqdSquvrHCT4ucz2Grx6yD4SSf1K9i1UCBSpwAc3UHR7iXoxu_mTdZSiLzmoHV5rRnxPzj7_En8FRfMm8KAIcCCgtcavc46ycPfN3a3suD5pl6auOXPDYj_6M_REDX1g2JM7HmR6TKZ3j2cx5ZNqiBL2DQ5dgd0iY_Y-WmIbVGdjXQYFmDGqAloBHF8cCstbPlCFhR5ANgijSXCsBqlujvtiKnPvnPOn_GKdA4NE3W-fNWHPllfOuUEMxdBNgBobUcdM7L8hs" />
                                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">JavaScript</span>
                                        </div>
                                        <div className="flex items-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 py-1 px-3">
                                            <img alt="React icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCcWNgpVHYj54u3u52TYtZzzK2hMecwbU74OwauQbIHbyQvoGOX9UhfD6m3CfaAhncEW390zWOu0y35LzmosiT_iPmyV_ZQAM4p1pa8w4NoglGkna8CsOKflP1TyP72yJ8rpRz_JNdrg9vtlFBfruxZD5FT1XZ0QmqvC7OMPru9f0yBtkrZOfrHP1X1qMUq4KbbFyMsW_eobwuP2HsmMBzbUTIIOtGu55eIWN2IduLbQ9y18a113O0jIN_ljMrs8H5axhLffw6JCSw" />
                                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">React</span>
                                        </div>
                                        <div className="flex items-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 py-1 px-3">
                                            <img alt="Express icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK1dqJwuW7I_vJ7SbrSvRk4Mq0dGXzC2M2y5OnNngWiMFbZ-nWGsVABZqAAVQTOHv1QgCD8QC4lCoKH1tJGlkBT8KfKfO0SMG3_dTbAs2jpd-5YIAdSMvWT7rx5jGlsZIb6U1QcuklEKtgTjAokt_NZl9uHfcIWMOLuvXsIOc1cial0LR6IBhr72c2jMD_Scj82f7Pw0_r0hTQm38iKYxpRdB-GgqSMx2RLB82X2OeUqZnuvoirt3cSv63jh2VjhlgHH-9TN4KipEr" />
                                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Express</span>
                                        </div>
                                        <div className="flex items-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 py-1 px-3">
                                            <img alt="MongoDB icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALMaXZTOe5s5TLU_RoU5WNmeqlaOrDmR890x06nF8oP8txMPzxC-j5Gj6mmCLGz5DXaxUbSRpqKAN-8w45X_TDSxwCJU2YtwDwXmfC1o0s0O0OZdho4ZYqfk-M97MpbvLb1vHxzS4-ViNr2CPj7WuJ6cNaCBOEfHByq5CKzDCCKGgiu8MO4DddubmczD4jZmoY8qLWPi8P8SxQ7qHOyHVseQKvbGqM2k1g8V7hmlkTor0YVdlefdSf13NyStCKEme8DFd7Id2WgJyQ" />
                                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">MongoDB</span>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex items-center space-x-4 text-sm font-semibold">
                                        <a className="flex items-center gap-2 rounded-md bg-primary-light/10 dark:bg-primary-light/10 px-3 py-2 text-primary-dark dark:text-primary-light shadow-button-glow transition-all hover:bg-primary-light/20 hover:scale-105" href="#">
                                            <span className="material-symbols-outlined text-lg">link</span>
                                            Live Site
                                        </a>
                                        <a className="flex items-center gap-2 rounded-md bg-primary-light/10 dark:bg-primary-light/10 px-3 py-2 text-primary-dark dark:text-primary-light shadow-button-glow transition-all hover:bg-primary-light/20 hover:scale-105" href="#">
                                            <img alt="GitHub icon" className="h-5 w-5 invert-0 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8tDOGTI4Ctt1EhPMdSXsfizyvlqfK7RInheVtWsTnM0QsOlKf5B94UKEOXVfK6dWKpW6lWhMOG0-B_no2k5rpd6h5vJgoM7XA4EkszGJh1v7Ubp1knQbTIN1S1a9zqlRG_GOeBkRMfB0_NAb5HkTVJz_Ai-6XFc847DkjI4uUOiCql6fGV9eTBSXN0BlhsV14q97jXOYMJwt0inpyzHymZfFY21H3HQkTkCuIt2-n8aTPYPELqzKHyIhCfuQ1UzbOuFYvZmJ2REAl" />
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative flex flex-col rounded-xl transition-all duration-300 hover:scale-105">
                            <div className="absolute -inset-2 rounded-xl bg-primary-light/30 blur-2xl transition-all duration-500 group-hover:bg-primary-light/40"></div>
                            <div className="relative flex flex-col h-full rounded-xl bg-slate-100 dark:bg-slate-900 overflow-hidden ring-1 ring-primary-light/30">
                                <div className="overflow-hidden">
                                    <img alt="Screenshot of the Event Hub management application" className="w-full h-56 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq9dnrZ9VypczW_4zm4ZiXsQ4bMIuNkIOot0OYwfIcZWH0GWwIohiF2MnxDSZwsiBYt0739_cwre1KTfJHt2MOgqzBYGayzXWiFwSbuMmAmGiaZgmPu-BUKnJB5U9ItIOZE7zkN2LWlFKPYQV4pOVznnmnpREzQmuHvLVJSHHOnaBrKrzpfXgMaBAPhdhqHnaGYPoSo53THfIT7CA9dlaHM75uB3IT_hXQyV4gz8oCbVkqKU9LHSC8oaZ9iGXjp0AaGkwV9n6Mj2lg" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-50">Event Hub</h3>
                                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 flex-grow leading-relaxed">
                                        A full-stack MERN app for creating, managing, and joining events—designed to be secure, responsive, and user-friendly for organizers and attendees alike.
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <div className="flex items-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 py-1 px-3">
                                            <img alt="React icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa8HtWqgjfP1ADqsxr-z6W_cjS3-2kBflUJSoHo8FJURBEQ9zblK4bjqlXK3Rxh4Tn8CD9hHMAiqGn4P6Xi8Qom7YX68wHq-HKDNc4dxgBMV2CMAD8xZVEyfG2QjFBbiTVxRY-QssAbFm-_0WJckcnLMElG6wJLzr-y-zrWWOcyP8CNZIsUzfQ3hOdgQC7nHWiAFjHKA0VygPtEyhokSrUzLHPF2qpvRKkKxyZLKex4B6SHGCC8XU2fli4zMxROU1wroPBUZqC3Xhg" />
                                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">React</span>
                                        </div>
                                        <div className="flex items-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 py-1 px-3">
                                            <img alt="Express icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQjJVgRA6saNgDO2X1wKzw_unwmR1ADGq2yFMOxJdp_F_qmY0jHm9I0rEyVACyq9-M-jGiWR5XGXADzu6VdOrSDg6m1m4zVDUeyxdsNqvegTnSCKaUnzmudbAqmhc6DD-LQl7BaRzO94_7cJE7cQfvDQTwlcasnWFC2FnxkXZmeCTrRLvhbCJ4wU2UGNXkEAktEPzjzGZRDjV-wttChbWbqJHxppjPwLoUh4m19KIrf-RPz_MaLdZPr86qFf2Vl6HYJK6ufOpLfgX8" />
                                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Express</span>
                                        </div>
                                        <div className="flex items-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 py-1 px-3">
                                            <span className="material-symbols-outlined text-base">lock</span>
                                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Custom Auth</span>
                                        </div>
                                        <div className="flex items-center gap-2 rounded-full bg-slate-200 dark:bg-slate-800 py-1 px-3">
                                            <img alt="JWT icon" className="h-4 w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASnUQVs8xQz4ZvMEYRY3oPJiIYFmIFbr0_iLsW8tr1nLisC_1_x5q4si8nP4T6L1dlP9mRcBfvI3WSepyJKQXBbQcViGhu_fpHvcyQvWdBk8r8YxWkA9yksS8CslKE5UuCcCZKCzWdR3clKHpYUhlznMq7yT4sGzjiwemgHu2CFo3USRvzgPcZqTyOE9pCfRZWE5P4KKqMZpw8NnXIRYZAjf8WlaPb92v97aoE6T-rPNdDYbKhcvJqj4aTMGVLKGJSnT9ryqsyEfV0" />
                                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">JWT</span>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex items-center space-x-4 text-sm font-semibold">
                                        <a className="flex items-center gap-2 rounded-md bg-primary-light/10 dark:bg-primary-light/10 px-3 py-2 text-primary-dark dark:text-primary-light shadow-button-glow transition-all hover:bg-primary-light/20 hover:scale-105" href="#">
                                            <span className="material-symbols-outlined text-lg">link</span>
                                            Live Site
                                        </a>
                                        <a className="flex items-center gap-2 rounded-md bg-primary-light/10 dark:bg-primary-light/10 px-3 py-2 text-primary-dark dark:text-primary-light shadow-button-glow transition-all hover:bg-primary-light/20 hover:scale-105" href="#">
                                            <img alt="GitHub icon" className="h-5 w-5 invert-0 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGF6ih5HclGXjUpi1HtS78_oA718MwD2d0MUmsSyv73KUjJZP8mU1VwVYgXQuZKtfsHIJqKUd2fuTgPOepuVQXtlBFJSh_XegtE4ahIjIGj9YsSXVZ7OyDeIzzlL7BWnvc71-06rou5VfWRHTd5CckLaZnIQrjyGgFatahbsGmkBWvQ37hfq7wxpbpZbT9FBJWp1Bm43sxXJBM8cmoVzs3EyY6T7fLzZqXbrcsjKNlqSDItUbZ5psizaMdkYC06PMuTKgXsuZ8C2IX" />
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
