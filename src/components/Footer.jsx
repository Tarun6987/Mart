import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer
        style={{
          backgroundColor: '#002147',
          color: 'white',
          padding: '40px 20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            textAlign: 'left',
          }}
        >
          {/* Column 1 */}
          <div
            style={{
              flex: 1,
              minWidth: '200px',
              padding: '10px',
            }}
          >
            <h3>Mart</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero
              id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel
              ut sollicitudin elit at amet.
            </p>
          </div>

          {/* Column 2 */}
          <div
            style={{
              flex: 1,
              minWidth: '200px',
              padding: '10px',
            }}
          >
            <h3>About Us</h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
              }}
            >
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div
            style={{
              flex: 1,
              minWidth: '200px',
              padding: '10px',
            }}
          >
            <h3>Customer Care</h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
              }}
            >
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Track Your Order</li>
              <li>Corporate & Bulk Purchasing</li>
              <li>Returns & Refunds</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div
            style={{
              flex: 1,
              minWidth: '200px',
              padding: '10px',
            }}
          >
            <h3>Contact Us</h3>
            <p>
              70 Washington Square South,
              <br />
              New York, NY 10012, United States
              <br />
              Email: example@email.com
              <br />
              Phone: +1 1234 567 890
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}