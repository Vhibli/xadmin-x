# Xadmin-x

Drop-in replacement of Django admin comes with lots of goodies, fully extensible with plugin support, pretty UI based on Twitter Bootstrap.

## Features

+ Drop-in replacement of Django admin
+ Twitter Bootstrap based UI with theme support
+ Extensible with plugin support
+ Better filter, date range, number range, etc.
+ Built-in data export with xls, csv, xml and json format
+ Dashboard page with widget support
+ In-site bookmarking
+ Full CRUD methods

## Install Requires

+ `django` >=3.0
+ `django-crispy-forms` >=1.6.0 (For xadmin crispy forms)
+ `django-reversion`([OPTION] For object history and reversion feature, please select right version by your django, see `changelog`)
+ `django-formtools` ([OPTION] For wizward form)
+ `xlwt` ([OPTION] For export xls files)
+ `xlsxwriter` ([OPTION] For export xlsx files)

<!-- .. _django: http://djangoproject.com
.. _django-crispy-forms: http://django-crispy-forms.rtfd.org
.. _django-reversion: https://github.com/etianen/django-reversion
.. _changelog: https://github.com/etianen/django-reversion/blob/master/CHANGELOG.rst
.. _django-formtools: https://github.com/django/django-formtools
.. _xlwt: http://www.python-excel.org/
.. _xlsxwriter: https://github.com/jmcnamara/XlsxWriter -->

## Documentation

+ English (coming soon)
+ [Chinese](https://xadmin.readthedocs.org/en/latest/index.html)

## Changelogs

### 0.6.0

+ Compact with Django1.9.
+ Add Clock Picker widget for timepicker.
+ Fixed some userface errors.

### 0.5.0

+ Update fontawesome to 4.0.3
+ Update javascript files to compact fa icons new version
+ Update tests for the new instance method of the AdminSite class
+ Added demo graphs
+ Added quickfilter plugin.
+ Adding apps_icons with same logic of apps_label_title.
+ Add xlsxwriter for big data export.
+ Upgrade reversion models admin list page.
+ Fixed reverse many 2 many lookup giving FieldDoesNotExist error.
+ Fixed user permission check in inline model.

[Detail](./changelog.md)

## Help

Help Translate : `http://trans.xadmin.io`
