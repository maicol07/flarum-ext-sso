<?php

use Rector\Config\RectorConfig;

return RectorConfig::configure()
    ->withPaths(['src', 'extend.php'])
    ->withPhpSets(php83: true)
    ->withPreparedSets(
        deadCode: true,
        typeDeclarations: true,
        typeDeclarationDocblocks: true,
        privatization: true,
        instanceOf: true,
        earlyReturn: true,
        carbon: true
    );
