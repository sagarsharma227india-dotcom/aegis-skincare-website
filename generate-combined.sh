#!/bin/bash
OUTPUT="aegis-complete-code.txt"
echo "AEGIS MEN SKINCARE - COMPLETE SOURCE CODE" > $OUTPUT
echo "=========================================" >> $OUTPUT
echo "" >> $OUTPUT

find src -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.css" \) | while read file; do
    echo "" >> $OUTPUT
    echo "=========================================" >> $OUTPUT
    echo "FILE: $file" >> $OUTPUT
    echo "=========================================" >> $OUTPUT
    cat "$file" >> $OUTPUT
done

for file in index.html package.json vite.config.ts tsconfig.json server.ts; do
    if [ -f "$file" ]; then
        echo "" >> $OUTPUT
        echo "=========================================" >> $OUTPUT
        echo "FILE: $file" >> $OUTPUT
        echo "=========================================" >> $OUTPUT
        cat "$file" >> $OUTPUT
    fi
done
