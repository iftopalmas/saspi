const heroTemplate = data => `
    <section class="z-0 container max-w-[120rem] mx-auto relative flex flex-col items-center justify-center p-0">
    <div class="z-10 py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-neutral-100 md:text-5xl lg:text-6xl">
            ${data.title}
        </h1>
        <p class="mb-8 text-lg font-normal text-neutral-300 lg:text-xl sm:px-16 xl:px-48">
            ${data.subtitle}
        </p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#user-content-inscrições" title="Faça sua inscrição" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                Faça sua inscrição
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <a href="#user-content-certificado" title="Consulte seu certificado" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-neutral-100 rounded-lg border border-gray-300 hover:text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                <svg class="mr-2 -ml-1 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 1v4a1 1 0 0 1-1 1H1m4 6 2 2 4-4m4-8v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z"/>
                </svg>
                Consulte seu certificado
            </a>
        </div>
        <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span class="font-semibold text-gray-300 uppercase">ORGANIZAÇÃO</span>
            <div class="flex flex-col sm:flex-row gap-y-8 sm:gap-y-0 flex-wrap justify-center items-center mt-8 text-gray-300 sm:justify-between">
                <a href="http://ifto.edu.br/palmas" title="IFTO campus Palmas" class="lg:mb-0 hover:text-gray-50">
                    <svg class="h-12" viewBox="0 0 358 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M86.4577 71.7V52.3H90.5795V71.7H86.4577Z" fill="currentColor"/>
                        <path d="M112.898 71.7H107.569L99.1248 57H99.0242C99.2253 59.6 99.3258 61.4 99.3258 62.6V71.7H95.5056V52.3H100.733L109.178 66.9001H109.279C109.178 64.4001 109.077 62.6 109.077 61.5V52.3H112.797L112.898 71.7Z" fill="currentColor"/>
                        <path d="M129.284 66.3C129.284 68.1 128.681 69.4 127.374 70.4C126.067 71.4 124.358 71.9 122.046 71.9C119.935 71.9 118.125 71.5 116.517 70.7V67C117.824 67.6 118.93 68 119.834 68.2C120.739 68.4 121.543 68.6 122.348 68.6C123.253 68.6 123.956 68.4 124.459 68.1C124.962 67.8 125.163 67.2 125.163 66.6C125.163 66.2 125.062 65.9 124.861 65.6C124.66 65.3 124.358 65 123.956 64.7C123.554 64.4 122.75 64 121.443 63.4C120.237 62.8 119.332 62.3 118.729 61.8C118.125 61.3 117.623 60.7 117.321 60C117.02 59.3 116.818 58.5 116.818 57.6C116.818 55.9 117.422 54.5 118.528 53.5C119.734 52.5 121.342 52 123.353 52C124.358 52 125.364 52.1 126.268 52.4C127.173 52.6 128.179 53 129.184 53.4L127.877 56.6C126.872 56.2 125.967 55.9 125.263 55.7C124.559 55.5 123.956 55.4 123.253 55.4C122.448 55.4 121.845 55.6 121.443 55.9C121.041 56.3 120.84 56.7 120.84 57.3C120.84 57.7 120.94 58 121.141 58.3C121.342 58.6 121.543 58.8 121.946 59.1C122.348 59.3 123.152 59.8 124.559 60.5C126.369 61.4 127.676 62.2 128.279 63.1C128.983 64 129.284 65.1 129.284 66.3Z" fill="currentColor"/>
                        <path d="M140.343 71.7H136.221V55.7001H130.893V52.3H145.671V55.7001H140.343V71.7Z" fill="currentColor"/>
                        <path d="M148.687 71.7V52.3H152.809V71.7H148.687Z" fill="currentColor"/>
                        <path d="M165.376 71.7H161.254V55.7001H155.925V52.3H170.704V55.7001H165.376V71.7Z" fill="currentColor"/>
                        <path d="M189.604 52.3V64.9001C189.604 66.3001 189.302 67.6 188.598 68.7C187.995 69.8 186.99 70.6 185.784 71.2C184.577 71.8 183.17 72.1 181.461 72.1C178.947 72.1 177.037 71.5 175.63 70.2C174.222 68.9 173.519 67.2001 173.519 64.9001V52.3H177.64V64.2C177.64 65.7 177.942 66.8 178.545 67.5C179.148 68.2 180.154 68.5 181.561 68.5C182.868 68.5 183.873 68.2 184.477 67.5C185.08 66.8 185.381 65.7 185.381 64.2V52.3H189.604Z" fill="currentColor"/>
                        <path d="M201.869 71.7H197.747V55.7001H192.419V52.3H207.197V55.7001H201.869V71.7Z" fill="currentColor"/>
                        <path d="M228.007 62C228.007 65.2 227.203 67.7 225.594 69.4C223.986 71.1 221.674 72 218.658 72C215.642 72 213.329 71.1 211.721 69.4C210.112 67.7 209.308 65.2 209.308 62C209.308 58.8 210.112 56.3 211.721 54.6C213.329 52.9 215.642 52 218.658 52C221.674 52 223.986 52.9 225.494 54.6C227.203 56.3 228.007 58.8 228.007 62ZM213.732 62C213.732 64.2 214.134 65.8 214.938 66.9C215.742 68 217.049 68.5 218.658 68.5C221.975 68.5 223.584 66.3 223.584 61.9C223.584 57.5 221.975 55.3 218.658 55.3C217.049 55.3 215.742 55.9 214.938 57C214.134 58.2 213.732 59.8 213.732 62Z" fill="currentColor"/>
                        <path d="M243.187 71.7H239.066V52.3H250.325V55.7001H243.187V60.7001H249.823V64.1H243.187V71.7Z" fill="currentColor"/>
                        <path d="M265.405 71.7H254.145V52.3H265.405V55.7001H258.267V60H264.902V63.4001H258.267V68.4001H265.405V71.7Z" fill="currentColor"/>
                        <path d="M285.713 61.8C285.713 65 284.808 67.4 282.998 69.1C281.189 70.8 278.575 71.7 275.056 71.7H269.527V52.3H275.659C278.876 52.3 281.289 53.1 283.099 54.8C284.808 56.5 285.713 58.8 285.713 61.8ZM281.39 61.9001C281.39 57.7001 279.58 55.6 275.86 55.6H273.649V68.3001H275.458C279.379 68.3001 281.39 66.2001 281.39 61.9001Z" fill="currentColor"/>
                        <path d="M300.994 71.7H289.734V52.3H300.994V55.7001H293.856V60H300.491V63.4001H293.856V68.4001H300.994V71.7Z" fill="currentColor"/>
                        <path d="M309.237 60.9001H310.544C311.851 60.9001 312.856 60.7001 313.459 60.2001C314.063 59.8001 314.364 59.1001 314.364 58.2001C314.364 57.3001 314.063 56.6001 313.359 56.2001C312.756 55.8001 311.75 55.6 310.444 55.6H309.237V60.9001ZM309.237 64.3001V71.8001H305.115V52.3H310.846C313.46 52.3 315.47 52.8001 316.777 53.7001C318.084 54.7001 318.687 56.1 318.687 58.1C318.687 59.2 318.386 60.3001 317.782 61.2001C317.179 62.1 316.274 62.8 315.068 63.3C317.983 67.7 319.894 70.5001 320.798 71.8001H316.174L311.549 64.3001H309.237Z" fill="currentColor"/>
                        <path d="M335.174 71.6999L333.767 67.0999H326.629L325.222 71.6999H320.698L327.635 52.2H332.661L339.598 71.6999H335.174ZM332.762 63.7C331.455 59.5 330.751 57.0999 330.55 56.5999C330.349 56.0999 330.248 55.5999 330.248 55.2999C329.947 56.3999 329.143 59.2 327.735 63.7H332.762Z" fill="currentColor"/>
                        <path d="M342.011 71.7V52.3H346.132V68.3001H354.075V71.7H342.011Z" fill="currentColor"/>
                        <path d="M30.1597 4H46.2448C47.3507 4 48.2555 4.9 48.2555 6V22C48.2555 23.1 47.3507 24 46.2448 24H30.1597C29.0538 24 28.149 23.1 28.149 22V6C28.149 4.9 29.0538 4 30.1597 4Z" fill="currentColor"/>
                        <path d="M54.2874 4H70.3726C71.4784 4 72.3832 4.9 72.3832 6V22C72.3832 23.1 71.4784 24 70.3726 24H54.2874C53.1815 24 52.2768 23.1 52.2768 22V6C52.2768 4.9 53.1815 4 54.2874 4Z" fill="currentColor"/>
                        <path d="M6.03193 28H22.1171C23.2229 28 24.1277 28.9 24.1277 30V46C24.1277 47.1 23.2229 48 22.1171 48H6.03193C4.92608 48 4.02129 47.1 4.02129 46V30C4.02129 28.9 4.92608 28 6.03193 28Z" fill="currentColor"/>
                        <path d="M30.1597 28H46.2448C47.3507 28 48.2555 28.9 48.2555 30V46C48.2555 47.1 47.3507 48 46.2448 48H30.1597C29.0538 48 28.149 47.1 28.149 46V30C28.149 28.9 29.0538 28 30.1597 28Z" fill="currentColor"/>
                        <path d="M6.03193 52H22.1171C23.2229 52 24.1277 52.9 24.1277 54V70C24.1277 71.1 23.2229 72 22.1171 72H6.03193C4.92608 72 4.02129 71.1 4.02129 70V54C4.02129 52.9 4.92608 52 6.03193 52Z" fill="currentColor"/>
                        <path d="M30.1597 52H46.2448C47.3507 52 48.2555 52.9 48.2555 54V70C48.2555 71.1 47.3507 72 46.2448 72H30.1597C29.0538 72 28.149 71.1 28.149 70V54C28.149 52.9 29.0538 52 30.1597 52Z" fill="currentColor"/>
                        <path d="M54.2874 52H70.3726C71.4784 52 72.3832 52.9 72.3832 54V70C72.3832 71.1 71.4784 72 70.3726 72H54.2874C53.1815 72 52.2768 71.1 52.2768 70V54C52.2768 52.9 53.1815 52 54.2874 52Z" fill="currentColor"/>
                        <path d="M6.03193 76H22.1171C23.2229 76 24.1277 76.9 24.1277 78V94C24.1277 95.1 23.2229 96 22.1171 96H6.03193C4.92608 96 4.02129 95.1 4.02129 94V78C4.02129 76.9 4.92608 76 6.03193 76Z" fill="currentColor"/>
                        <path d="M30.1597 76H46.2448C47.3507 76 48.2555 76.9 48.2555 78V94C48.2555 95.1 47.3507 96 46.2448 96H30.1597C29.0538 96 28.149 95.1 28.149 94V78C28.149 76.9 29.0538 76 30.1597 76Z" fill="currentColor"/>
                        <path d="M14.0745 25C20.182 25 25.1331 20.0751 25.1331 14C25.1331 7.92487 20.182 3 14.0745 3C7.96705 3 3.01597 7.92487 3.01597 14C3.01597 20.0751 7.96705 25 14.0745 25Z" fill="currentColor"/>
                        <path d="M91.1827 96H89.4737V82.6H84.7487V81H96.0083V82.5H91.2833V96H91.1827Z" fill="currentColor"/>
                        <path d="M107.67 90.4001C107.67 92.2001 107.167 93.7001 106.263 94.7001C105.358 95.7001 104.051 96.2001 102.442 96.2001C101.437 96.2001 100.532 96.0001 99.728 95.5001C98.9237 95.0001 98.3205 94.4001 97.9184 93.5001C97.5163 92.6001 97.3152 91.6001 97.3152 90.4001C97.3152 88.6001 97.8179 87.1001 98.7226 86.1001C99.6274 85.1001 100.934 84.6001 102.543 84.6001C104.151 84.6001 105.358 85.1001 106.263 86.2001C107.268 87.2001 107.67 88.6001 107.67 90.4001ZM99.1248 90.4001C99.1248 91.8001 99.4264 92.9001 100.03 93.7001C100.633 94.5001 101.437 94.8001 102.543 94.8001C103.649 94.8001 104.554 94.4001 105.056 93.7001C105.659 93.0001 105.961 91.9001 105.961 90.4001C105.961 89.0001 105.659 87.9001 105.056 87.1001C104.453 86.4001 103.649 86.0001 102.442 86.0001C101.336 86.0001 100.432 86.4001 99.929 87.1001C99.4264 87.8001 99.1248 88.9001 99.1248 90.4001Z" fill="currentColor"/>
                        <path d="M115.21 96.2001C113.601 96.2001 112.295 95.7001 111.39 94.7001C110.485 93.7001 110.083 92.3001 110.083 90.5001C110.083 88.6001 110.585 87.2001 111.49 86.1001C112.395 85.1001 113.702 84.6001 115.411 84.6001C115.914 84.6001 116.517 84.7001 117.02 84.8001C117.522 84.9001 118.025 85.1001 118.326 85.2001L117.824 86.6001C117.422 86.4001 117.02 86.3001 116.617 86.2001C116.215 86.1001 115.813 86.1001 115.411 86.1001C113.099 86.1001 111.993 87.6001 111.993 90.5001C111.993 91.9001 112.295 92.9001 112.797 93.7001C113.3 94.5001 114.205 94.8001 115.31 94.8001C116.215 94.8001 117.221 94.6001 118.226 94.2001V95.7001C117.321 96.0001 116.316 96.2001 115.21 96.2001Z" fill="currentColor"/>
                        <path d="M127.676 95.9999L127.374 94.3999H127.274C126.671 95.0999 126.168 95.5999 125.565 95.7999C124.962 95.9999 124.258 96.1999 123.454 96.1999C122.348 96.1999 121.443 95.8999 120.84 95.2999C120.237 94.6999 119.935 93.8999 119.935 92.7999C119.935 90.4999 121.745 89.2999 125.364 89.1999L127.274 89.0999V88.3999C127.274 87.4999 127.073 86.8999 126.671 86.3999C126.268 85.9999 125.665 85.7999 124.861 85.7999C123.956 85.7999 122.85 86.0999 121.644 86.6999L121.141 85.3999C121.745 85.0999 122.348 84.8999 122.951 84.6999C123.554 84.4999 124.258 84.3999 124.962 84.3999C126.268 84.3999 127.274 84.6999 127.978 85.2999C128.581 85.8999 128.983 86.7999 128.983 88.1999V95.9999H127.676ZM123.856 94.7999C124.962 94.7999 125.766 94.4999 126.369 93.8999C126.972 93.2999 127.274 92.4999 127.274 91.4999V90.4999L125.565 90.5999C124.157 90.5999 123.253 90.8999 122.649 91.1999C122.046 91.5999 121.745 92.1999 121.745 92.8999C121.745 93.4999 121.946 93.9999 122.348 94.2999C122.75 94.5999 123.152 94.7999 123.856 94.7999Z" fill="currentColor"/>
                        <path d="M140.242 96V88.7C140.242 87.8 140.041 87.1 139.639 86.6C139.237 86.1 138.533 85.9 137.629 85.9C136.422 85.9 135.618 86.2 135.015 86.9C134.412 87.6 134.211 88.6 134.211 90V96H132.501V84.8H133.909L134.211 86.3H134.311C134.613 85.7 135.115 85.3 135.819 85C136.422 84.7 137.126 84.5 137.93 84.5C139.338 84.5 140.343 84.8 141.047 85.5C141.75 86.2 142.052 87.2 142.052 88.6V96H140.242Z" fill="currentColor"/>
                        <path d="M149.089 94.8C149.391 94.8 149.692 94.8 149.994 94.7C150.296 94.7 150.497 94.6 150.698 94.6V95.9C150.497 96 150.195 96.1 149.894 96.1C149.491 96.2 149.19 96.2 148.888 96.2C146.677 96.2 145.571 95.1 145.571 92.8V86.1H143.962V85.3L145.571 84.6L146.274 82.2H147.28V84.8H150.597V86.1H147.28V92.7C147.28 93.4 147.481 93.9 147.782 94.3C148.084 94.7 148.486 94.8 149.089 94.8Z" fill="currentColor"/>
                        <path d="M152.708 81.7C152.708 81.3 152.809 81 153.01 80.8C153.211 80.6 153.412 80.5 153.714 80.5C154.015 80.5 154.216 80.6 154.418 80.8C154.619 81 154.719 81.3 154.719 81.7C154.719 82.1 154.619 82.4 154.418 82.6C154.216 82.8 154.015 82.9 153.714 82.9C153.412 82.9 153.211 82.8 153.01 82.6C152.809 82.4 152.708 82.1 152.708 81.7ZM154.619 96H152.91V84.8H154.619V96Z" fill="currentColor"/>
                        <path d="M165.979 96V88.7C165.979 87.8 165.778 87.1 165.376 86.6C164.973 86.1 164.27 85.9 163.365 85.9C162.158 85.9 161.354 86.2 160.751 86.9C160.148 87.6 159.947 88.6 159.947 90V96H158.238V84.8H159.645L159.947 86.3H160.047C160.349 85.7 160.852 85.3 161.555 85C162.158 84.7 162.862 84.5 163.666 84.5C165.074 84.5 166.079 84.8 166.783 85.5C167.487 86.2 167.788 87.2 167.788 88.6V96H165.979Z" fill="currentColor"/>
                        <path d="M178.445 92.9C178.445 93.9 178.043 94.8 177.238 95.3C176.434 95.9 175.328 96.2 173.921 96.2C172.413 96.2 171.206 96 170.402 95.5V93.9C170.905 94.2 171.508 94.4 172.111 94.5C172.714 94.6 173.318 94.7 173.921 94.7C174.826 94.7 175.529 94.6 176.032 94.3C176.535 94 176.736 93.6 176.736 93C176.736 92.6 176.535 92.2 176.132 91.9C175.73 91.6 175.027 91.2 173.921 90.8C172.915 90.4 172.111 90.1 171.709 89.8C171.307 89.5 170.905 89.2 170.704 88.8C170.503 88.4 170.402 88 170.402 87.5C170.402 86.6 170.804 85.9 171.508 85.3C172.212 84.8 173.318 84.5 174.624 84.5C175.831 84.5 177.037 84.7 178.143 85.2L177.54 86.6C176.434 86.1 175.429 85.9 174.423 85.9C173.619 85.9 173.016 86 172.614 86.3C172.212 86.6 172.011 86.9 172.011 87.3C172.011 87.6 172.111 87.9 172.212 88.1C172.413 88.3 172.614 88.5 172.915 88.7C173.217 88.9 173.921 89.2 174.926 89.5C176.233 90 177.138 90.5 177.64 91C178.143 91.5 178.445 92.2 178.445 92.9Z" fill="currentColor"/>
                    </svg>
                </a>
                <a href="http://www.ifto.edu.br/palmas/campus-palmas/cursos-palmas/graduacao/tecnologico/sistemas-para-internet" title="Sistemas para Internet - IFTO campus Palmas" class="lg:mb-0 hover:text-gray-50">
                    <svg class="h-14" viewBox="0 0 205.17 122.23" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g transform="translate(272.98 -126.82)"><path d="m-207.52 126.82c-2.4064-0.0848-4.8672 1.7326-4.656 4.6932 0.0637 0.8936 0.30594 1.6764 0.67231 2.172 0.55537 0.7512 0.57309 1.0011 0.57309 8.1938v7.4192h-19.059l-21.493 19.216c-11.689 10.451-21.04 18.899-21.252 19.196-2e-3 3e-3 -0.2403 0.21583-0.2403 0.21704 0 1e-3 0.23789 0.21368 0.2403 0.21704 0.21291 0.29691 9.5636 8.745 21.252 19.196l21.493 19.216h19.059v7.4192c0 7.1927-0.0177 7.4426-0.57309 8.1938-0.36637 0.49554-0.60861 1.2784-0.67231 2.172-0.12571 1.7624 0.65849 3.2397 2.1766 4.0995 3.1578 1.7884 6.981-0.64453 6.6637-4.2406-0.065-0.73694-0.35082-1.5965-0.67851-2.0397-0.54707-0.73999-0.56638-1.0185-0.56638-8.185v-7.4192h13.229v7.2869c0 6.9528-0.0254 7.3204-0.54777 8.0269-1.5207 2.0569-1.0116 4.8625 1.1787 6.4978 1.0348 0.77261 3.7881 0.77261 4.823 0 2.1903-1.6353 2.6994-4.4409 1.1787-6.4978-0.41137-0.5564-0.54725-1.1374-0.54725-2.3384v-1.5984h3.222c1.7723 0 3.5999 0.13653 4.0612 0.30334 1.1941 0.4318 2.11 0.12323 2.5115-0.84595 0.29715-0.71738 0.27491-0.89854-0.19069-1.525-0.56205-0.75621-1.799-1.0809-2.281-0.59893-0.17537 0.17537-1.6411 0.28526-3.8044 0.28526h-3.5186v-8.9958h13.229v7.4192c0 7.1665-0.0193 7.445-0.56637 8.185-1.3095 1.7712-0.75055 4.777 1.1384 6.1221 1.2544 0.8932 3.4641 0.97416 4.8519 0.17776 2.1235-1.2186 2.882-4.4204 1.4924-6.2999-0.54708-0.73999-0.56638-1.0185-0.56638-8.185v-7.4192h19.236l19.552-8.8775c18.659-8.4718 20.457-9.3519 39.323-19.248 10.874-5.7039 19.77-10.43 19.77-10.503s-8.8966-4.7985-19.77-10.502c-19.06-9.9969-20.476-10.688-39.401-19.248l-19.63-8.879h-19.08v-7.4192c0-7.1665 0.0193-7.445 0.56638-8.185 1.3895-1.8795 0.63106-5.0813-1.4924-6.2999-1.3878-0.7964-3.5975-0.71544-4.8519 0.17777-1.889 1.3451-2.448 4.3509-1.1384 6.1221 0.54707 0.73999 0.56637 1.0185 0.56637 8.185v7.4192h-13.229v-7.2869c0-6.9528 0.0249-7.3204 0.54725-8.0269 2.0157-2.7264 0.32583-6.7287-2.9993-7.1034-1.5899-0.1792-2.908 0.29591-3.8737 1.3958-1.4558 1.658-1.5812 3.9848-0.30747 5.7077 0.41137 0.55641 0.54777 1.1374 0.54777 2.3384v1.5984h-3.2225c-1.7723 0-3.6-0.13653-4.0612-0.30334-1.1941-0.43179-2.11-0.12323-2.5115 0.84594-0.29715 0.7174-0.27439 0.89855 0.1912 1.525 0.56206 0.75621 1.7985 1.0809 2.2805 0.59893 0.17537-0.17537 1.6412-0.28525 3.8044-0.28525h3.5192v8.9958h-13.229v-7.4192c0-7.1665 0.0193-7.445 0.56638-8.185 0.85724-1.1595 0.93158-3.0404 0.17828-4.5031-0.816-1.5845-2.2402-2.32-3.684-2.3709zm19.211 0.78444c2.0496 0 3.6597 1.565 3.6597 3.5569 0 1.4336-0.74004 2.717-1.9358 3.3564-1.9023 1.0172-3.9756 0.34088-4.977-1.6237-1.2824-2.5159 0.42363-5.2896 3.253-5.2896zm-11.199 10.052c0.97025 0 1.6462 1.6415 0.95911 2.3285-0.17463 0.17462-0.62677 0.3173-1.0051 0.3173-0.83614 0-1.3229-0.44247-1.3229-1.2025 0-0.63962 0.76227-1.4433 1.3689-1.4433zm-29.702 13.758 40.955 0.0134 40.956 0.014 20.241 18.119c11.132 9.9652 20.241 18.23 20.241 18.366s-9.1083 8.4011-20.241 18.366l-20.241 18.119-82.021-8e-3 -20.241-18.125c-11.132-9.9686-20.241-18.227-20.241-18.352 0-0.12536 9.1328-8.3922 20.295-18.37zm90.113 4.4468 2.1906 1.1767c18.022 9.6791 56.927 30.789 56.927 30.889 9e-5 0.0728-12.222 6.7403-27.16 14.817-14.938 8.0764-28.239 15.263-29.559 15.971l-2.3988 1.2867 0.92604-0.92862c0.50932-0.51097 8.4865-7.6786 17.727-15.928 9.2406-8.2491 16.801-15.097 16.801-15.218s-7.5605-6.9691-16.801-15.218c-9.2406-8.2491-17.218-15.415-17.727-15.923zm-46.964 9.5219v14.606h2.8887l0.077-2.1828 0.077-2.1828 6.1671-0.0708c7.0037-0.0807 7.5136 0.0268 8.7126 1.8386 1.4069 2.126 0.84079 5.1243-1.2268 6.4983-0.87033 0.57835-1.1004 0.59738-7.2099 0.59738h-6.3107v6.8792h7.9375v3.175l1.9182-2e-3c5.7596-6e-3 9.8831-2.0855 12.777-6.444 1.5109-2.2756 2.0527-4.1392 2.1813-7.5024 0.0961-2.5151 0.0246-3.2624-0.4687-4.8948-0.75953-2.5134-1.9975-4.5216-3.8938-6.3174-1.8268-1.73-2.9371-2.4374-5.0131-3.1962-1.4314-0.52312-2.191-0.57484-10.081-0.68367zm-17.205 0.10904c-2.2899-0.0199-5.4482-0.0167-8.9224 0.0145-13.513 0.12123-13.453 0.1156-16.237 1.5332-3.7112 1.8897-6.4772 5.7887-6.9841 9.8454l-0.18914 1.5167h6.8936l0.18707 1.1245c0.38986 2.3411 1.684 3.9744 3.9605 4.9987 1.2249 0.55111 1.8328 0.60717 8.2021 0.75809 7.727 0.18309 8.5127 0.34716 11.101 2.3136 2.3051 1.7515 3.463 3.7218 3.9734 6.7619 0.15854 0.94422 0.22214 1.0026 1.0103 0.92604 0.82159-0.0799 0.83975-0.10948 0.76585-1.2723-0.21724-3.4161-2.3162-6.8857-5.473-9.047-3.4025-2.3295-3.7908-2.4152-11.689-2.5812-6.4577-0.13578-6.9755-0.18282-7.6564-0.69143-2.4587-1.8367-2.3725-5.0091 0.17518-6.441 0.93511-0.52551 1.3658-0.55397 8.3556-0.55397h7.3696l4.4344-4.4287c2.439-2.4359 4.4349-4.5295 4.4349-4.6524 0-0.0615-1.4215-0.1046-3.7114-0.12454zm53.056 0.0775-0.0734 4.0349-0.0729 4.0349h6.8931v6.35l-5.1e-4 6.35h2.652l-0.0693-10.385-0.0687-10.385h-4.6302zm-37.174 1.1741-6.2177 0.1488-0.0687 21.431c-0.0376 11.787-0.0102 21.583 0.0605 21.768 0.0988 0.25858 1.1873 0.32019 4.6984 0.26459l4.5703-0.0724 0.0703-7.2099 0.0703-7.2099h7.9292v-3.175h-7.9375v-11.377h-3.175v-7.2843zm35.984 8.2186 6e-3 15.544 6e-3 15.544 4.4256 2.0298h5.2e-4c2.434 1.1165 4.5149 2.0392 4.624 2.0505s0.19844-5.0395 0.19844-11.224v-11.245h-2.6458v-12.7h-3.3073zm-84.139 5.2736 4e-3 0.8692c7e-3 1.4887 0.76695 4.1906 1.6392 5.827 0.901 1.6905 3.1104 3.8665 4.8266 4.7532 2.8598 1.4776 3.5548 1.5881 10.861 1.7286 7.5406 0.145 7.9394 0.22295 8.8899 1.7358 0.40698 0.64772 0.50803 1.1744 0.42943 2.2381-0.10476 1.4175-0.69172 2.3589-1.911 3.0649-0.37044 0.21452-4.1798 0.34613-12.7 0.43873l-12.171 0.13229-0.0734 4.2225c-0.0403 2.3225-0.0141 4.3763 0.0579 4.5641 0.10425 0.27161 2.4956 0.34041 11.715 0.33641 6.3711-3e-3 12.417-0.12464 13.436-0.27027 5.7606-0.82361 10.504-5.7274 11.058-11.432l0.12196-1.2568h-1.3922c-1.4933 0-1.7056-0.22908-1.7146-1.8521-7e-3 -1.1374-1.4549-3.7907-2.8071-5.1428-0.72877-0.72877-2.0489-1.653-3.0164-2.1115l-1.7208-0.81545-6.6146-0.14935c-7.1816-0.16219-7.7794-0.27003-10.011-1.8056-1.4243-0.97995-2.382-2.2173-2.8975-3.7445l-0.39791-1.1798-2.8055-0.0749zm58.473 55.316c1.2912 0 1.7994 1.3387 0.83871 2.2081-0.62888 0.56911-1.1806 0.5544-1.7239-0.046-0.87486-0.96671-0.38538-2.1621 0.88522-2.1621zm-10.938 5.3728c1.4832 0.15249 2.6035 1.0093 3.1331 2.3962 0.71506 1.8723-0.0205 3.6647-1.9012 4.6333-1.4222 0.73249-3.7781 0.056-4.6798-1.3436-1.6239-2.5205 0.48069-5.991 3.4478-5.686z"/></g></svg>
                </a>
                <a href="https://www.instagram.com/caspi_ifto/" title="CASPI - IFTO" class="lg:mb-0 hover:text-gray-50">
                    <svg class="h-8" viewBox="0 0 1050.4 280" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                         <path d="m245.4 280c41.2 0 63-24.9 63-66.8v-9.6c0-4.1-3.4-7.5-7.5-7.5h-25.4c-4.1 0-7.5 3.4-7.5 7.5v12.7c0 17.9-8.5 24.9-21.4 24.9s-21.4-7-21.4-24.9v-152c0-17.9 8.6-25.3 21.4-25.3s21.4 7.4 21.4 25.3v8.1c0 4.1 3.4 7.5 7.5 7.5h25.4c4.1 0 7.5-3.4 7.5-7.5v-5.4c0-42-21.8-66.8-63-66.8s-63 24.9-63 66.8v146.1c0.1 42 21.8 66.9 63 66.9z"/>
                         <path d="m388.3,6.4l-43.1,264.8c-.7,4.6,2.8,8.7,7.4,8.7h25.5c3.7,0,6.9-2.7,7.4-6.4l7.1-48.4,5.2-38,12.2-86.5c1.2-8.6,13.6-8.6,14.8,0l12.5,86.5,5.2,38v-.8l7.1,49.1c.5,3.7,3.7,6.4,7.4,6.4h28.6c4.6,0,8.1-4.1,7.4-8.7L449.9,6.3c-.6-3.6-3.7-6.3-7.4-6.3h-46.8c-3.7.1-6.8,2.8-7.4,6.4Z"/>
                         <path d="m592.8,280c42,0,64.5-24.9,64.5-69.2,0-33.8-11.3-55.6-47-87.1-28-24.5-36.9-38.9-36.9-58.7,0-18.7,7.8-26,21.4-26s21.4,7.4,21.4,26.8v6.5c0,4.1,3.4,7.5,7.5,7.5h25.4c4.1,0,7.5-3.4,7.5-7.5v-3.8C656.6,25,636,.1,594.4.1s-63.7,24.9-63.7,67.6c0,31.1,11.7,53.2,47.4,84.7,28,24.5,36.5,38.9,36.5,61.4,0,20.2-8.5,27.2-22.2,27.2s-22.2-7-22.2-26.4v-11.2c0-4.1-3.4-7.5-7.5-7.5h-25.4c-4.1,0-7.5,3.4-7.5,7.5v8.1c0,43.6,21,68.5,63,68.5h0Z"/>
                         <path d="m700.1,280h29c4.1,0,7.5-3.4,7.5-7.5v-109c0-4.1,3.4-7.5,7.5-7.5h13.3c44,0,65.6-24.4,65.6-69.2v-17.5C823,24.5,801.4.1,757.4.1h-57.3c-4.1,0-7.5,3.4-7.5,7.5v264.9c0,4.1,3.4,7.5,7.5,7.5Zm36.5-171.5v-60.9c0-4.1,3.4-7.5,7.5-7.5h13.3c14,0,21.6,6.4,21.6,26.4v23.1c0,20-7.6,26.4-21.6,26.4h-13.3c-4.1,0-7.5-3.3-7.5-7.5Z"/>
                         <path d="m0,151.1v-26.9c0-3,1.8-5.7,4.5-6.9l137-59.1c4.9-2.1,10.4,1.5,10.4,6.9v23.4c0,3-1.8,5.7-4.6,6.9l-83.9,35.4c-6.1,2.6-6.1,11.2,0,13.8l83.9,35.4c2.8,1.2,4.6,3.9,4.6,6.9v23.4c0,5.4-5.5,9-10.4,6.9L4.5,158c-2.8-1.2-4.5-3.9-4.5-6.9Z"/>
                         <path d="m936.5,79.5l-5.6,20.9c-1,3.6.9,7.4,4.3,8.8l51.4,21.7c6.1,2.6,6.1,11.2,0,13.8l-72.8,30.7c-2.1.9-3.7,2.7-4.3,5l-7.1,26.6c-1.6,6,4.5,11.3,10.2,8.8l133.3-57.5c2.7-1.2,4.5-3.9,4.5-6.9v-27.1c0-3-1.8-5.7-4.5-6.9l-99.2-42.8c-4.2-1.9-9,.5-10.2,4.9Z"/>
                         <path d="m899.3.1h25.3c4.9,0,8.5,4.7,7.2,9.4l-71,264.8c-.9,3.3-3.8,5.5-7.2,5.5h-25.2c-4.9,0-8.5-4.7-7.2-9.4L892.2,5.6c.8-3.2,3.8-5.5,7.1-5.5Z"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>

    <div class="absolute top-0 left-0 w-full h-full overflow-hidden after:absolute after:bg-black after:bg-opacity-80 after:w-full after:h-full after:top-0 after:left-0">
        <img src="./resources/images/backgrounds/hero-image.jpeg" alt="Imagem" class="min-w-full min-h-full absolute object-cover">
    </div>
</section>`

export const getHero = html => {
    const data = {}

    data.title = html.querySelector('h1').textContent
    data.subtitle = 'Tecnologia, agro, ciência e comunidade. Novas asas para o futuro!'

    return heroTemplate(data)
}
