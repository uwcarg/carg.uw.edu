set -x

# Clean old build
sshpass -e ssh -o StrictHostKeyChecking=no travis@wilcoxlab.uw.edu rm -rf /opt/wilcoxlab/www/*

# Copy new build
sshpass -e scp -o StrictHostKeyChecking=no -r ./public/. travis@wilcoxlab.uw.edu:/opt/wilcoxlab/www/
