import util from './../../utils/util.js';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        sortindex: 0, //排序索引
        sortid: null, //排序id
        sort: [],
        activitylist: [],//会议列表数据
        scrolltop: null,//滚动位置
        page: 0 //分页
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.fetchConferenceData();
        this.fetchSortData();
    },

    /**
        * 获取筛选条件
        */
    fetchSortData: function () {
        this.setData({
            "sort": [{
                "id": 0,
                "title": "热门点击"
            }, {
                "id": 1,
                "title": "最新发布"
            },
            {
                "id": 2,
                "title": "最多参与"
            }]
        });
    },

    /**
      * 获取会议列表
      */
    fetchConferenceData: function () {
        const perpage = 10;
        this.setData({
            page: this.data.page + 1
        });
        const page = this.data.page;
        const newlist = [];
        for (var i = (page - 1) * perpage; i < page * perpage; i++) {
            newlist: push({
                "id": i + 1,
                "name": "云栖技术分享日（云栖TechDay" + (i + 1) + ")",
                "status": util.getRandomArrayElement(["进行中", "报名中", "已结束"]),
                "time": "2016/07/12 14:00",
                "coments": Math.floor(Math.random() * 1000),
                "address": "杭州云栖小镇咖啡馆  （杭州云计算产业园内）",
                "imgurl": "http://pic.58pic.com/58pic/12/34/51/85d58PICkjf.jpg"
            })
        }
        this.setData({
            activitylist: this.data.activitylist.concat(newlist)
        });
    },

    /**
     * 选择排序方式
     */
    setSortBy: function (e) {
        const d = this.data;
        const dataset = e.currentTarget.dataset;
        this.setData({
            sortindex: dataset.sortindex,
            sortid: dataset.sortid
        })
        console.log('排序方式id:' + this.data.sortid);
    },

    /**
     * 设置状态颜色
     */
    setStatusClass: function (e) {
        console.log(e);
    },
    /**
     * 滚动事件
     */
    scrollHandle: function (e) {
        this.setData({
            scrolltop: e.detail.scrollTop
        })
    },

    /**
    * 回到顶部
    */
    goToTop: function (e) {
        this.setData({
            scrolltop: 0
        })
    },

    /**
     * 滚动加载
     */
    scrollLoading: function (e) {
        this.fetchConferenceData();
    },

    /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
    onPullDownRefresh: function () {
        this.setData({
            page: 0,
            activitylist: []
        });
        this.fetchConferenceData();
        this.fetchSortData();
        setTimeout(() => {
            wx.stopPullDownRefresh()
        }, 1000)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})