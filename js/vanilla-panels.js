document.addEventListener("DOMContentLoaded", function() {
    'use strict';

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
