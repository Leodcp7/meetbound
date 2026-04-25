import re

files = [
    "app/page.tsx",
    "app/(marketing)/blog/page.tsx", 
    "app/(marketing)/blog/[slug]/page.tsx",
]

for f in files:
    with open(f, 'r') as file:
        content = file.read()
    if 'force-dynamic' not in content:
        content = "export const dynamic = 'force-dynamic'\n\n" + content
        with open(f, 'w') as file:
            file.write(content)
        print(f"Fixed: {f}")
    else:
        print(f"Already fixed: {f}")
