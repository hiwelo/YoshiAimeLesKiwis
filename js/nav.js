/*jslint browser: true*/
/*global $, jQuery, alert*/
var nav = function () {
    'use strict';
    $('.js--modal--close')
        .removeClass('js--modal--close')
        .addClass('modal--close');
    $('.js--modal').fadeOut(0, function () {
        $(this)
            .removeClass('js--modal')
            .addClass('modal')
            .fadeIn(0);
    });
    $('.navigation--element').click(function () {
        var onglet = $(this).data('onglet');
        if (onglet === 'portfolio') {
            $('.navigation--element')
                .removeClass('actif')
                .removeClass('inactif');
            $('.modal').removeClass('actif');
            $(this).addClass('actif');
        } else {
            $('.navigation--element')
                .removeClass('actif')
                .addClass('inactif');
            $(this)
                .removeClass('inactif')
                .addClass('actif');
            $('.modal.actif')
                .removeClass('actif');
            $('.modal.' + onglet)
                .addClass('actif');
        }
    });
    $('.modal--close').click(function () {
        $('.modal').removeClass('actif');
        $('.navigation--element')
            .removeClass('actif')
            .removeClass('inactif');
    });
};

$(document).ready(nav);
