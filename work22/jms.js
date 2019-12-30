(function () {
    var JMS = function (id , rowCount , colCount , minLandMineCount , maxLandMineCount) {
        if (!(this instanceof JMS))
            return new JMS(id, rowCount, colCount, minLandMineCount, maxLandMineCount);
        this.doc = document ;
        this.table = this . doc. getElementById(id);
        this.cells = this. table. getElementsByTagName("td");
        this.rowCount = rowCount || 10;
        this.colCount = colCount || 10;
        this.landMineCount = 0;
        this.markLandMineCount = 0;
        this.minLandMineCount = minL andMineCount I1 10;
        thi.maxLandMineCount = maxL andMineCount II 20;
        this.arrs = [];
        this.beginTime = null;
        this.endTime = null;
        this.currentSetpCount = 0;
        this.endCallBack = null;
        thіѕ.lаndМіnеСаllВасk = null;
        thіѕ.dос.оnсоntехtmеnu = funсtіоn () {
            return false;
    };
    this.drawMap();
    };

    JMS.prototype = {
        $: function (id) {
            return this. doc . getElementById(id);
        },

        drawMap: function () {
            var tds = [];
            if (window.ActiveX0bject && parseInt(navigator.userAgent.match(/msie ([\d.]+)/i)[1]) < 8) {
                var css = '#JMS_main table td{background-color:#888;}',
                    head = this.doc.getElementsByTagName("head") [0],
                    style = this.doc.createElement("style");
                style.type = "text/css";
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                }else {
                    style.appendChild(this.doc.createTextNode(css));
                }
                head.appendChild(style);
            }
            for (var i = 0; i < this. rowCount; i++) {
                tds.push("<tr>");
                for(varj=0;j<this.colCount;j++){
                    tds.push("<td id='m_"+ i+""+j+"'></td>");
                }
                tds.push("</td>");
            }
            this.setTableInnerHTML(this . table, tds. join(""));
        },
        //初始化，一是没置数組默人値カ0，是磆定地雷个数
        init: function () {
            for (var i = 0; i < this. rowCount; i++) {
                this.arrs[i] = [];
                for (var j = 0; j < this. colCount; j++) {
                    this.arrs[i][j] = 0;
                }
            }
            this.landMineCount = this.selectFrom(this.minLandMineCount, this.maxLandMineCount);
            this.markLandMineCount = 0
            this.beginTime = null; 
            this.endTime = null;
            this.currentSetpCount = 0;
        },
        landMine: function () {
            var allCount = this. rowCount * this. colCount - 1,
                tempArr = {};
            for (var i = 0; i < this.landMineCount; i++) {
                var randomNum = this.selectFrom(0, allCount) ,
                    rowCol = this.getRowCol( randomNum) ;
                if ( randomNum in tempArr) {
                    i--;
                    continue;
                }
                this.arrs [rowCol.row][rowCol.col] = 9;
                tempArr [randomNum] = randomNum;
            }
        },

        calculateNoLandMineCount: function () {
            for (var i = 0; i < this. rowCount; i++) {
                for (var j = 0; j < this. colCount; j++) {
                    if (this.arrs[i][j] == 9)
                        continue ;
                    if (i>0 && j>0){
                        if (this.arrs[i-1][j-1] == 9)
                            this.arrs [i][j]++;
                    }
                    if(i>0){
                        if (this.arrs[i - 1][j] = 9)
                            this.arrs[i][j]++;
                    }
                    if(i>0 && j<this.colCount-1){
                        if (this.arrs[i-1][j+1] == 9)
                            this.arrs [i][j]++;
                    }
                    if(j>0){
                        if (this.arrs[i][j-1] == 9)