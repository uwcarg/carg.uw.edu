set -x

# Clean old build
sshpass -e ssh travis@wilcoxlab.uw.edu rm -rf /opt/wilcoxlab/www/*

# Copy new build
sshpass -e scp -o StrictHostKeyChecking=accept-new -r ./public/. travis@wilcoxlab.uw.edu:/opt/wilcoxlab/www/
