app.tabs = {
    name: 'tabs',
    description: 'tabs',
    init() {
        $('.tab').on('click', function () {
            const $tab = $(this);
            const $tabNotActive = $tab.closest('.tabs').find('.tab.active');
            const tabNotActiveIdArr = $tabNotActive.attr('id').split('_');
            const tabNotActiveId = tabNotActiveIdArr[tabNotActiveIdArr.length - 1];
            const $tabsContent = $(`#${$tab.attr('aria-controls')}`);
            const $tabsContentNotActive = $(`#${$tabNotActive.attr('aria-controls')}`);

            $tabNotActive.removeClass('active');
            $tabNotActive.attr('aria-selected', false);

            $tab.addClass('active');
            $tab.attr('aria-selected', true);

            if ($tab.attr('aria-controls') !== undefined || !$tab.hasClass('js-certificate-tab')) {
                $tabsContentNotActive.hide();
                $tabsContent.fadeIn();
            } else {
                $('[data-tab').show();
                $(`[data-tab=${tabNotActiveId}]`).hide();
            }
        });
    },
};