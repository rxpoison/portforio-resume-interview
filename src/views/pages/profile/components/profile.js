import LaptopMacIcon from '@material-ui/icons/LaptopMac'

export const profiles = () => {
    return {
        name : "Chammy",
        fullname : "Chanathip Thongmont",
        age : "1992-26-04",
        position : "Frontend / Backend / Full stack (Developer)"
    }
}

export const works = () => {
    return [
        {
            company : "CF manager",
            position : "SENIOR FULLSTACK PROGRAMMER / Mini team lead",
            exp : "November 2020 - May 2021",
            tech : [ 
                'Javascript',
                'React JS',
                'PHP',
                'LARAVEL',
                'CODE IGNITER',
                'NODE JS',
                'SOCKET.IO',
                'CPanel',
                'Digital Ocean',
                'Git / Bitbucket',
                'MySql',
                'MSSql'
            ],
            role : [
                'Connected logistics api with CF manager such as DHL Express, SCG Express, Ninja van, Thailand post, Shippop.',
                'Create print label like A6, 56mm (Paperang, Peripage).',
                'Create print label log with all paper.',
                'Modify sale page from web application to Mobile (bootstrap responsive, css).',
                'Create a Stock realtime with React js.',
                'Development of Checkout stock when logistics pickup product.',
                'Create Account web application with React js.',
                'Manage small team.',
                'Manage git control, Deploy project to cloud server.',
                'Development of restAPI as CF manager project and Account web application'
            ],
            timelineConnector : true,
            logo : <LaptopMacIcon />
        },{
            company : "JND WEB",
            position : "SENIOR FULLSTACK PROGRAMMER",
            exp : "July 2020 - October 2020",
            tech : [ 
                'PHP',
                'LARAVEL',
                'LUMEN',
                'EXPRESS JS',
                'ELECTRON JS',
                'MICROSOFT POWER BI',
                'GIT / Bitbucket',
                'MySql'
            ],
            role : [
                'Analyze customer data with Microsoft power BI',
                'Create POS system with front-end and back-end',
                'Development POS system to Windows app with Electron js and Sync data system',
                'Connect Time attendance to POS'
            ],
            timelineConnector : true,
            logo : <LaptopMacIcon />
        },{
            company : "RODTANK K.C. METAL SHEET PUBLIC CO.,LTD",
            position : "PROGRAMMER",
            exp : "March 2020 - July 2020",
            tech : [ 
                'PHP',
                'LARAVEL',
                'LUMEN',
                'NODE JS',
                'EXPRESS JS',
                'UBUNTU SERVER',
                'DOCKER',
                'GIT',
                'MySql'
            ],
            role : [
                'Development of ERP system in module HRM (Human resource management)', 
                'Connected Time attendance to all branch of company with node js'],
            timelineConnector : true,
            logo : <LaptopMacIcon />
        },{
            company : "BLACKHOLE SOFT",
            position : "JUNIOR FULLSTACK PROGRAMMER",
            exp : "August 2018 - March 2020",
            tech : [ 
                'PHP',
                'LARAVEL',
                'CODE IGNITER',
                'NODE JS',
                'SOCKET.IO',
                'FRAMEWORK 7',
                'REACT JS',
                'MySql'
            ],
            role : ['Development of any software for customer'],
            timelineConnector : false,
            logo : <LaptopMacIcon />
        }
    ]
}