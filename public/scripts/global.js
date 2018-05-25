/*globals $:false */
/*globals console:false */
/*
  constants and global functions
*/

"use strict";
var JSON_FILE = 'books-schema.json';
var BD = [],
    BD_titles = [];
var containerSearch = '.app>content';

function global() {
    return {
        setBD: function(_bd) {
            BD = _bd;
            var i;
            for(i = 0; i < _bd.data.length; i++) {
                BD_titles.push(_bd.data[i].title);
            }

            var input = document.getElementById("fch-input");
            new Awesomplete(input, {
                list: BD_titles,
                minChars: 3,
                maxItems: 7,
            });

            global().buildMain();
        },
        buildResult: function(txtSearch) {
            $(containerSearch).empty();
            var str = '';

            for(var i = 0; i < BD.data.length; i++) {
                if(BD.data[i].title.toLowerCase().indexOf(txtSearch.toLowerCase()) > -1) {
                    str = str +
                        '<div class="pure-u-1-3">' +
                        '<div class="holder">' +
                        '<img src="' + BD.data[i].image + '" alt="" />' +
                        '<h1>' + BD.data[i].title + '</h1>' +
                        '<span>' + BD.data[i].teaser + '</span>' +
                        '</div></div>';
                }
            }
            $(containerSearch).append(str);

        },
        buildFilter: function(txtSearch) {
            $(containerSearch).empty();
            var filtrados = '';

            for(var i = 0; i < BD.data.length; i++) {
                if(BD.data[i].categories[0].toLowerCase().indexOf(txtSearch.toLowerCase()) > -1) {
                    filtrados = filtrados +
                        '<div class="pure-u-1-3">' +
                        '<div class="holder">' +
                        '<img src="' + BD.data[i].image + '" alt="" />' +
                        '<h1>' + BD.data[i].title + '</h1>' +
                        '<span>' + BD.data[i].teaser + '</span>' +
                        '</div></div>';
                }
            }
            $(containerSearch).append(filtrados);

        },
        buildMain: function() {
            console.log("obj: " + BD.data);
            var strini = '';
            for(var i = 0; i < 9; i++) {
                strini = strini +
                    '<div class="pure-u-1-3">' +
                    '<div class="holder">' +
                    '<img src="' + BD.data[i].image + '" alt="" />' +
                    '<h1>' + BD.data[i].title + '</h1>' +
                    '<span>' + BD.data[i].teaser + '</span>' +
                    '</div></div>';
            }
            $(containerSearch).append(strini);

            global().setFilters();
        },
        setFilters: function() {
            $('.filters a').click(function() {
                global().buildFilter($(this).attr('lb-genero'));
            });
        }
    };
}