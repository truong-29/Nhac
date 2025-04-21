document.addEventListener('DOMContentLoaded', function() {
    // 1. Lấy tất cả các mục podcast từ carousel
    const carousel = document.getElementById('carousel');
    const podcastItems = Array.from(carousel.children);
  
    // 2. Hàm trộn mảng (Fisher-Yates Shuffle)
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  
    // 3. Trộn mảng và chọn 4 mục đầu tiên
    const selectedItems = shuffleArray(podcastItems.slice()).slice(0, 4);
  
    // 4. Chèn các mục đã chọn vào khung gợi ý
    const suggestedContainer = document.getElementById('suggestedContainer');
    selectedItems.forEach(item => {
      // Dùng cloneNode(true) để sao chép toàn bộ nội dung của phần tử
      const clone = item.cloneNode(true);
      // Xóa phần tử vòng tròn (order-circle) để không hiển thị số thứ tự
      const circle = clone.querySelector('.order-circle');
      if (circle) {
        circle.remove();
      }
      suggestedContainer.appendChild(clone);
    });
  
    // 5. Cài đặt carousel vô hạn (infinite loop)
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
  
    // Khi nhấn nút sang phải (Next)
    nextBtn.addEventListener('click', () => {
      carousel.style.transition = 'transform 0.5s ease';
      carousel.style.transform = 'translateX(-20%)';
  
      // Sau khi hoàn thành chuyển động, chuyển phần tử đầu tiên ra cuối
      carousel.addEventListener('transitionend', function handler() {
        carousel.appendChild(carousel.firstElementChild);
        // Tắt hiệu ứng và đặt lại transform
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)';
        // Gỡ bỏ sự kiện để không bị gọi nhiều lần
        carousel.removeEventListener('transitionend', handler);
      });
    });
  
    // Khi nhấn nút sang trái (Prev)
    prevBtn.addEventListener('click', () => {
      // Đưa phần tử cuối lên đầu
      carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
      // Đặt ngay vị trí dịch chuyển mà không có transition
      carousel.style.transition = 'none';
      carousel.style.transform = 'translateX(-20%)';
  
      // Kích hoạt hiệu ứng sau 1 khoảng ngắn
      setTimeout(() => {
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = 'translateX(0)';
      }, 30);
    });
  });