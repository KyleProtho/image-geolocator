export async function compressImage(file, maxSizeMB = 1) {
    const maxSizeBytes = maxSizeMB * 1024 * 1024;

    if (file.size <= maxSizeBytes) {
        return file;
    }

    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;

            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                // Resize excessively large images to help with compression
                // This is a heuristic: keeping max dimension below 2500px usually helps getting under 1MB with reasonable quality
                const MAX_DIMENSION = 2500;
                if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
                    if (width > height) {
                        height = Math.round((height * MAX_DIMENSION) / width);
                        width = MAX_DIMENSION;
                    } else {
                        width = Math.round((width * MAX_DIMENSION) / height);
                        height = MAX_DIMENSION;
                    }
                }

                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                let quality = 0.9;

                const attemptCompression = () => {
                    canvas.toBlob((blob) => {
                        if (!blob) {
                            reject(new Error('Image compression failed'));
                            return;
                        }

                        // If smaller than limit or quality is already very low, accept it
                        if (blob.size <= maxSizeBytes || quality <= 0.2) {
                            // Convert Blob back to File to preserve name and metadata approach
                            const compressedFile = new File([blob], file.name, {
                                type: 'image/jpeg',
                                lastModified: Date.now(),
                            });
                            resolve(compressedFile);
                        } else {
                            // Reduce quality and try again
                            quality -= 0.1;
                            attemptCompression();
                        }
                    }, 'image/jpeg', quality);
                };

                attemptCompression();
            };

            img.onerror = (err) => reject(new Error('Failed to load image for compression'));
        };

        reader.onerror = (err) => reject(new Error('Failed to read file'));
    });
}
