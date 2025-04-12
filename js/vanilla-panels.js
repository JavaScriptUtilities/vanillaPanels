document.addEventListener("DOMContentLoaded", function() {
    'use strict';

    var _panelTemplate =
        '<div class="panel-wrapper" aria-hidden="true" data-panel-open="false">' +
        '<div class="panel-overlay"></div>' +
        '<div class="panel-content">' +
        '<a href="#" class="panel-content__close"><span>Close Panel</span></a>' +
        '</div>' +
        '</div>';

    var $panelsToBuild = document.querySelectorAll('[data-build-panel]');
    Array.prototype.forEach.call($panelsToBuild, function($item) {
        if (!$item) {
            return;
        }

        if (!$item.querySelector('.panel-content__inner')) {
            console.log('No panel content found');
            return;
        }

        var _panelId = $item.getAttribute('data-build-panel');

        /* Build wrapper */
        var $wrapper = document.createElement('div');
        $wrapper.innerHTML = _panelTemplate;
        $wrapper = $wrapper.firstElementChild;
        $wrapper.setAttribute('data-panel', _panelId);

        /* Load panel content */
        $item.removeAttribute('data-build-panel');
        $wrapper.querySelector('.panel-content').appendChild($item);

        /* Inject in body */
        document.body.appendChild($wrapper);
    });

    /* Open a panel on click */
    document.body.addEventListener('click', function(event) {
        var panelTrigger = event.target.closest('[data-panel-trigger]');
        if (panelTrigger) {
            event.preventDefault();
            open_panel(panelTrigger.getAttribute('data-panel-trigger'));
        }
    });

    /* Close all panels when clicking echap */
    document.body.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            close_panels();
        }
    });

    /* Close panels on click on panel-overlay */
    document.body.addEventListener('click', function(event) {
        var panelOverlay = event.target.closest('[data-panel-close], .panel-overlay, .panel-content__close');
        if (panelOverlay) {
            event.preventDefault();
            close_panels();
        }
    });

    function close_panels() {
        var panels = document.querySelectorAll('[data-panel]');
        panels.forEach(function(panel) {
            panel.setAttribute('data-panel-open', 'false');
        });
    }

    function open_panel(id) {
        if (!id) {
            return;
        }
        close_panels();
        var panel = document.querySelector('[data-panel="' + id + '"]');
        if (panel) {
            panel.setAttribute('data-panel-open', 'true');
        }
    }

});
