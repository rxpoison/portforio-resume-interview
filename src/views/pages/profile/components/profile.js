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
                'เชื่อมต่อขนส่งเข้ากับระบบของ CF manager เช่น DHL Express, SCG Express, Ninja van, Thailand post, Shippop',
                'สร้างใบปริ้นปะหน้ารูปแบบใหม่ สำหรับกระดาษ A6, 56mm (Paperang, Peripage)',
                'เพิ่มระบบเก็บ Log การปริ้น เพื่อแก้ปัญหาการสั่งปริ้นย้อนหลังผ่านระบบ',
                'ปรับปรุงหน้าของระบบการซื้อขายให้อยู่ในรูปแบบของ Mobile',
                'สร้างระบบดูและเช็ค Stock realtime ด้วย React js',
                'พัฒนาระบบการ Checkout สินค้าเมื่อมีขนส่งมารับของ (เช็คของซ้ำเพื่อตรวจสอบของที่ตกหล่นหรือไม่ครบ)',
                'พัฒนาโปรแกรมจัดการบัญชีด้วย React js',
                'ควบคุมทีมและดูแลทีมในส่วนของระบบบัญชีที่ถูกพัฒนาขึ้นด้วย React js',
                'จัดการ Server สำหรับ Deploy project และวางระบบ Git control ภายใต้โปรเจคบัญชี',
                'จัดการ API สำหรับงานทางฝั่งของ Cf manager และ บัญชี'
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
                'นำข้อมูลของลูกค้ามาเขียนวิเคราะห์กราฟด้วย Microsoft power BI',
                'เขียนระบบ POS ในส่วนของ Frontend และ Backend',
                'พัฒนาระบบ POS ให้อยู่ในรูปแบบของ Windows app ด้วย Electron js พร้อมกับทำระบบ Sync ข้อมูล',
                'พัฒนาส่วนของเครื่องสแกนนิ้วมือพนักงานเข้ากับระบบ POS (สแกนนิ้วก่อนเริ่มงาน)'
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
                'ทำระบบ ERP งานด้านการบริหารทรัพยากรบุคคล ด้วย Laravel', 
                'ใช้ Node js เชื่อมต่อกับเครื่องสแกนนิ้วมือกับสำนักงานทั้งหมด 20 สาขาผ่านเคลือข่ายของทางบริษัท และ Deploy งานลง Ubuntu server ที่สาขาใหญ่'],
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
            role : ['เขียนโปรแกรมตามขอบเขตงานของลูกค้า'],
            timelineConnector : false,
            logo : <LaptopMacIcon />
        }
    ]
}