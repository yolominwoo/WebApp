# WebApp

<!DOCTYPE html>
<html>
<head>
    <title>asdf</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <style>
        * {
            box-sizing:border-box;
        }
        
        .lsidenav {
            height:100%;
            width:0;
            position:fixed;
            z-index:1;
            top:0;
            left:0;
            background-color:#61E07C;
            overflow-x:hidden;
            transition:0.7s;
            padding-top:60px;
        }
        
        .lsidenav a {
            padding:8px 8px 8px 32px;
            text-decoration:none;
            font-size:25px;
            color:#2c3344;
            display:block;
            transition:0.3s;
            height: 100%;
            display: flex;
            align-items: center; /* 수직 가운데 정렬 */
        }
        
        .lsidenav a:hover {
            color:#224e75;
        }
        
        .lsidenav .closebtn {
            position:absolute;
            top:0;
            right:25px;
            font-size:80px;
            margin-left:50px;
        }
        .lside {
            float:left;
            width:20%;
            background-color:#d2e8e5;
            padding:20px 10px 20px 10px;
            text-align:center;
        }
        /*---------------------------------------------------------------------------------------------*/
        .rsidenav {
            height:100%;
            width:0;
            position:fixed;
            z-index:1;
            top:0;
            right:0;
            background-color:#3A556D;
            overflow-x:hidden;
            transition:0.7s;
            padding-top:60px;
        }
        
        .rsidenav a {
            padding:8px 8px 8px 32px;
            text-decoration:none;
            font-size:25px;
            color:#2c3344;
            display:block;
            transition:0.3s;
            height: 100%;
            display: flex;
            align-items: center; /* 수직 가운데 정렬 */
        }
        
        .rsidenav a:hover {
            color:#224e75;
        }
        
        .rsidenav .closebtn {
            position:absolute;
            top:0;
            left:25px;
            font-size:80px;
            margin-right:50px;
        }
        .rside {
            float:right;
            width:20%;
            background-color:#d2e8e5;
            padding:20px 10px 20px 10px;
            text-align:right;
        }
        .imag {
            background-color:none;
            overflow:hidden;
            max-width:100%;
            width:auto !important;
            height:auto !important;
            padding:0;
        }
        .row {
            display:flex;
            flex-wrap:wrap;
            background-color:#4C2132;
            justify-content: center; /* 중앙 정렬 */
        }
        .main {
            flex:1;
            background-color:#ffffff;
            display: flex;
            flex-direction: column;
            align-items: center; /* 가운데 정렬 */
            text-align: center;
        }
        .btn-container {
            display: flex;
            justify-content: space-between; /* 양 끝으로 정렬 */
            width: 100%;
            padding: 20px;
            align-items: center;
        }
        .btn-container span {
            font-size : 80px; /* 버튼 크기 조정 */
            line-height: 50px; /* 높이 조정 */
            cursor : pointer;
        }
    </style>
</head>

<body>
    <div class="main">
        <div id="lmySidenav" class="lsidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="lcloseNav()">
                >
            </a>
            <a href="https://www.naver.com">naver</a>
        </div>
        <div id="rmySidenav" class="rsidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="rcloseNav()">
                <
            </a>
            <a href="https://www.daum.net">daum</a>
        </div>
        <div class="btn-container">
            <span onclick="lopenNav()">
                <
            </span>
            <span onclick="ropenNav()">
                >
            </span>
        </div>
        <div class="row">
            <div class="imag">
                <div class="container">
                    <img src="" alt="빗살무늬토기" style="max-width:100%; max-height:100%;">
                </div>
            </div>
        </div>
    </div>
    
    <script>
        function lopenNav() {
            document.getElementById("lmySidenav").style.width="100%";
        }

        function lcloseNav() {
            document.getElementById("lmySidenav").style.width="0";
        }
        function ropenNav() {
            document.getElementById("rmySidenav").style.width="100%";
        }

        function rcloseNav() {
            document.getElementById("rmySidenav").style.width="0";
        }
    </script>
</body>
</html>